import Link from "next/link";
import { getClientData } from "@/app/lib/site-data";

export default async function SiteFooter() {
  const client = await getClientData();

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <p className="footer-brand">{client.nome_comercial}</p>
          <p className="footer-location">
            Restaurante artesanal em {client.endereco.cidade}, {client.endereco.estado}
          </p>
        </div>
        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <Link href="/cardapio">Cardápio</Link>
          <Link href="/ambiente">Ambiente</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/reserva">Reservas</Link>
        </nav>
      </div>
    </footer>
  );
}
