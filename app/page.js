import Link from "next/link";
import ActionLink from "@/app/components/action-link";
import CoastIllustration from "@/app/components/coast-illustration";
import Icon from "@/app/components/site-icons";
import {
  getClientData,
  getEditorialPages,
  getPageMetadata,
  requireField,
  requireSection,
} from "@/app/lib/site-data";

export async function generateMetadata() {
  return getPageMetadata("home");
}

export default async function HomePage() {
  const [client, pages] = await Promise.all([
    getClientData(),
    getEditorialPages(),
  ]);
  const home = pages.home;
  const opening = requireSection(home, "Abertura");
  const presentation = requireSection(home, "Apresentação");
  const ending = requireSection(home, "Encerramento");
  const whatsapp = client.links.whatsapp;

  return (
    <main id="conteudo">
      <section className="home-hero shell">
        <div className="hero-copy">
          <p className="eyebrow">
            {client.endereco.cidade} · {client.endereco.estado}
          </p>
          <h1>{client.nome_comercial}</h1>
          <p className="hero-slogan">{client.slogan}</p>
          <p className="hero-description">
            {requireField(opening, "Texto de apresentação")}
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/cardapio">
              <span>Ver cardápio</span>
              <Icon name="arrow" />
            </Link>
            <ActionLink href={whatsapp} icon="whatsapp" variant="button-light">
              Reservar pelo WhatsApp
            </ActionLink>
          </div>
          <div className="hero-contacts" aria-label="Outros canais e localização">
            <ActionLink href={client.links.instagram} icon="instagram" variant="button-text">
              Instagram
            </ActionLink>
            <ActionLink href={client.links.google_maps} icon="maps" variant="button-text">
              Como chegar
            </ActionLink>
          </div>
        </div>
        <CoastIllustration />
      </section>

      <section className="intro-section">
        <div className="shell intro-grid">
          <p className="eyebrow">Uma experiência em Galinhos</p>
          <div>
            <h2>{requireField(presentation, "Título")}</h2>
            <p className="section-copy">
              {requireField(presentation, "Texto")}
            </p>
          </div>
          <div className="slow-food-note">
            <span className="note-mark" aria-hidden="true">●</span>
            <p>{client.conceito}</p>
            <span>Gastronomia artesanal</span>
          </div>
        </div>
      </section>

      <section className="home-close shell" aria-label="Contato">
        <span className="close-rule" aria-hidden="true" />
        <h2>{requireField(ending, "Texto")}</h2>
      </section>
    </main>
  );
}
