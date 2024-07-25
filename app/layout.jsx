import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import Image from "next/image";

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
        <div className="hidden lg:block">
          <Header />
          {children}
          <Footer />
        </div>
        <div className="h-svh w-svw lg:hidden grid bg-black place-content-center">
          <div className="flex flex-col gap-5 items-center text-white">
            <Image
              src={"/assets/logo_small.svg"}
              alt="Logo"
              className="brightness-0 invert"
              width={100}
              height={100}
            />
            <h2 className="text-9xl text-center font-bold">503</h2>
            <p className="text-xl text-center px-5">
              La página mobile se está forjando{" "}
              <span className="block">Por favor entrar desde la PC</span>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
