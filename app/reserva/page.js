import ActionLink from "@/app/components/action-link";
import {
  getClientData,
  getEditorialPages,
  getPageMetadata,
  requireField,
  requireSection,
} from "@/app/lib/site-data";

export async function generateMetadata() {
  return getPageMetadata("reserva");
}

export default async function ReservaPage() {
  const [client, pages] = await Promise.all([
    getClientData(),
    getEditorialPages(),
  ]);
  const page = pages.reserva;
  const reserve = requireSection(page, "Solicite sua reserva");

  return (
    <main id="conteudo" className="inner-page reservation-page">
      <section className="reservation-hero shell">
        <div className="reservation-copy">
          <p className="eyebrow">Atendimento mediante reserva</p>
          <h1>{requireField(reserve, "Título")}</h1>
          <p className="lead-copy">{requireField(reserve, "Texto")}</p>
          <ActionLink href={client.links.whatsapp} icon="whatsapp">
            Solicitar reserva pelo WhatsApp
          </ActionLink>
        </div>
        <aside className="reservation-panel">
          <span className="panel-index">Gastronomia artesanal</span>
          <h2>{client.slogan}</h2>
          <p>
            Uma proposta sob o conceito {client.conceito}, em{" "}
            {client.endereco.cidade}, {client.endereco.estado}.
          </p>
        </aside>
      </section>

      <section className="reservation-contact shell">
        <div>
          <p className="eyebrow">Localização e redes</p>
          <h2>Planeje sua visita a {client.endereco.cidade}</h2>
          <p className="section-copy">
            {client.endereco.cidade}, {client.endereco.estado}
          </p>
        </div>
        <div className="contact-actions">
          <ActionLink
            href={client.links.instagram}
            icon="instagram"
            variant="button-light"
          >
            Acompanhe no Instagram
          </ActionLink>
          <ActionLink
            href={client.links.google_maps}
            icon="maps"
            variant="button-text"
          >
            Como chegar
          </ActionLink>
        </div>
      </section>
    </main>
  );
}
