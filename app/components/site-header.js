import Link from "next/link";
import { getClientData } from "@/app/lib/site-data";

const navigation = [
  ["Início", "/"],
  ["Cardápio", "/cardapio"],
  ["Ambiente", "/ambiente"],
  ["Sobre", "/sobre"],
  ["Reservas", "/reserva"],
];

export default async function SiteHeader() {
  const client = await getClientData();

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label={`${client.nome_comercial} — início`}>
          <span className="brand-place">Galinhos</span>
          <span className="brand-name">
            Fruto do Mar <span>Slow Food</span>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="header-reserve" href="/reserva">
          Reservar <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
