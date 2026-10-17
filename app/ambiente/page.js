import CoastIllustration from "@/app/components/coast-illustration";
import {
  getEditorialPages,
  getPageMetadata,
  requireField,
  requireSection,
} from "@/app/lib/site-data";

export async function generateMetadata() {
  return getPageMetadata("ambiente");
}

export default async function AmbientePage() {
  const pages = await getEditorialPages();
  const page = pages.ambiente;
  const opening = requireSection(page, "Abertura");
  const atmosphere = requireSection(page, "Atmosfera");

  return (
    <main id="conteudo" className="inner-page">
      <section className="environment-hero shell">
        <div className="environment-copy">
          <p className="eyebrow">A atmosfera de Galinhos</p>
          <h1>{requireField(opening, "Título")}</h1>
          <p className="lead-copy">
            {requireField(opening, "Texto introdutório")}
          </p>
        </div>
        <CoastIllustration variant="ambiente" />
      </section>

      <section className="environment-story">
        <div className="shell story-inner">
          <p className="eyebrow">Um convite à calma</p>
          <div>
            <h2>{requireField(atmosphere, "Título")}</h2>
            <p className="section-copy">
              {requireField(atmosphere, "Texto")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
