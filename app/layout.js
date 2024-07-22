import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Forge Labs - Construye tu PC a medida",
  description:
    "La web que te ayuda a construir tu PC personalizada con los mejores componentes del mercado.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/favicon.svg"
        />
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
      </head>
      <body className={""}>
        <Header />
        {children}
        <Footer/>  
      </body>
    </html>
  );
}
