import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Forge Labs - Construye tu PC a medida",
  description:
    "La web que te ayuda a construir tu PC personalizada con los mejores componentes del mercado.",
  image: "/assets/logo.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={""}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
