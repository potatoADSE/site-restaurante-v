import ActionLink from "@/app/components/action-link";
import {
  getClientData,
  getEditorialPages,
  getPageMetadata,
  requireField,
  requireSection,
} from "@/app/lib/site-data";

export async function generateMetadata() {
  return getPageMetadata("sobre");
}

export default async function SobrePage() {
  const [client, pages] = await Promise.all([
    getClientData(),
    getEditorialPages(),
  ]);
  const page = pages.sobre;
  const essence = requireSection(page, "Nossa essência");
  const chefs = requireSection(page, "Os chefs");
  const location = requireSection(page, "Localização");
  const mapSearch = encodeURIComponent(
    `${client.nome_comercial}, ${client.endereco.cidade}, ${client.endereco.estado}`,
  );

  return (
    <main id="conteudo" className="inner-page">
      <header className="page-heading shell about-heading">
        <p className="eyebrow">Galinhos Fruto do Mar Slow Food</p>
        <h1>{requireField(essence, "Título")}</h1>
        <p>{requireField(essence, "Texto")}</p>
      </header>

      <section className="chefs-section">
        <div className="shell chefs-inner">
          <div>
            <p className="eyebrow">Gastronomia artesanal</p>
            <h2>{requireField(chefs, "Título")}</h2>
            <p className="section-copy">À frente da proposta gastronômica:</p>
          </div>
          <ul className="chef-list" aria-label="Chefs">
            {client.chefs.map((chef, index) => (
              <li key={chef}>
                <span>0{index + 1}</span>
                <strong>{chef}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="location-section shell">
        <div className="location-copy">
          <p className="eyebrow">{requireField(location, "Título")}</p>
          <h2>{client.endereco.cidade}, {client.endereco.estado}</h2>
          <p className="section-copy">
            {requireField(location, "Texto")}
          </p>
        </div>
        <div className="location-map">
          <iframe
            src={`https://www.google.com/maps?q=${mapSearch}&output=embed`}
            title={`Mapa com a localização do ${client.nome_comercial}, em ${client.endereco.cidade}, ${client.endereco.estado}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <ActionLink href={client.links.google_maps} icon="maps" variant="button-dark">
            {client.google_maps.pagina_sobre.botao_texto}
          </ActionLink>
        </div>
      </section>
    </main>
  );
}
