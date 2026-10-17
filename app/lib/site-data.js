import { cache } from "react";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const clientFile = join(process.cwd(), "cliente", "cliente.json");
const editorialFile = join(
  process.cwd(),
  "conteudo",
  "conteudo-provisorio.md",
);

export const getClientData = cache(async () =>
  JSON.parse(await readFile(clientFile, "utf8")),
);

function cleanMarkdown(value) {
  return value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

function parseEditorial(markdown) {
  const pages = {};
  let page = null;
  let section = null;

  for (const line of markdown.split(/\r?\n/)) {
    const pageHeading = line.match(/^## (.+)$/);
    if (pageHeading) {
      const key = pageHeading[1].toLowerCase();
      page = ["home", "cardápio", "ambiente", "sobre", "reserva"].includes(key)
        ? (key === "cardápio" ? "cardapio" : key)
        : null;
      section = null;
      if (page) pages[page] = { sections: {} };
      continue;
    }

    const sectionHeading = line.match(/^### (.+)$/);
    if (sectionHeading && page) {
      section = {
        fields: {},
        paragraphs: [],
        bullets: [],
      };
      pages[page].sections[sectionHeading[1]] = section;
      continue;
    }

    if (!page || !section || !line.trim() || line.trim() === "---") continue;

    const field = line.match(/^\s*-\s+\*\*(.+?):\*\*\s*(.*)$/);
    if (field) {
      section.fields[cleanMarkdown(field[1])] = cleanMarkdown(field[2]);
      continue;
    }

    const boldLabel = line.match(/^\*\*(.+?):\*\*\s*(.*)$/);
    if (boldLabel) {
      section.fields[cleanMarkdown(boldLabel[1])] = cleanMarkdown(
        boldLabel[2],
      );
      continue;
    }

    const bullet = line.match(/^\s*-\s+(.+)$/);
    if (bullet) {
      section.bullets.push(cleanMarkdown(bullet[1]));
      continue;
    }

    if (!line.startsWith("#")) section.paragraphs.push(cleanMarkdown(line));
  }

  return pages;
}

export const getEditorialPages = cache(async () =>
  parseEditorial(await readFile(editorialFile, "utf8")),
);

export function requireSection(page, heading) {
  const section = page?.sections?.[heading];
  if (!section) {
    throw new Error(`Seção editorial ausente: "${heading}".`);
  }
  return section;
}

export function requireField(section, label) {
  const value = section.fields[label];
  if (!value) {
    throw new Error(`Campo editorial ausente: "${label}".`);
  }
  return value;
}

export async function getPageMetadata(slug) {
  const pages = await getEditorialPages();
  const page = pages[slug];
  const seo = requireSection(page, "SEO");

  return {
    title: requireField(seo, "Título SEO"),
    description: requireField(seo, "Meta description"),
  };
}
