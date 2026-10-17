import { getClientData, getEditorialPages, getPageMetadata, requireField, requireSection } from "@/app/lib/site-data";

export async function generateMetadata() {
  return getPageMetadata("cardapio");
}

export default async function CardapioPage() {
  const [client, pages] = await Promise.all([
    getClientData(),
    getEditorialPages(),
  ]);
  const page = pages.cardapio;
  const opening = requireSection(page, "Introdução — texto publicável");
  const categories = client.cardapio.categorias_sugeridas;

  return (
    <main id="conteudo" className="inner-page">
      <header className="page-heading shell menu-heading">
        <p className="eyebrow">Gastronomia artesanal · Galinhos, RN</p>
        <h1>{requireField(opening, "Título")}</h1>
        <p>{requireField(opening, "Texto")}</p>
      </header>

      <section className="menu-list shell" aria-labelledby="menu-categories">
        <div className="menu-list-heading">
          <div>
            <p className="eyebrow">Prévia ilustrativa</p>
            <h2 id="menu-categories">Categorias sugeridas</h2>
          </div>
          <p className="menu-note">
            Estas categorias ainda precisam ser confirmadas pelo restaurante.
            Não representam itens, preços ou disponibilidade confirmados.
          </p>
        </div>
        <ul className="category-grid">
          {categories.map((category, index) => (
            <li className="category-card" key={category}>
              <span className="category-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{category}</h3>
              <span className="category-status">Sugestão provisória</span>
            </li>
          ))}
        </ul>
        <p className="menu-pending">
          Pratos, ingredientes, valores, disponibilidade e fotografias
          individuais aguardam validação dos responsáveis.
        </p>
      </section>
    </main>
  );
}
