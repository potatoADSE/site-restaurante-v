import "./globals.css";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";

export const metadata = {
  title: {
    default: "Galinhos Fruto do Mar Slow Food | Galinhos, RN",
    template: "%s",
  },
  description:
    "Gastronomia artesanal e uma experiência em Galinhos, no litoral potiguar.",
  applicationName: "Galinhos Fruto do Mar Slow Food",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
