import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-[calc(100svh-104px)] relative">
        <h1 className="text-7xl uppercase font-black text-center">
          Ensambla, mejora, innova.
        </h1>
        <p className="text-center my-4 font-medium text-xl max-w-2xl">
          Convierte tu idea en un proyecto real con Forge Labs, la plataforma
          que te ayuda a construir tu PC personalizada con los mejores
          componentes del mercado.
        </p>
        <Button href={"#"} text={"Comenzar"} type="button" />
        <Image
          src="/assets/hero_img.png"
          width={1580}
          height={400}
          alt="Personajes trabajando con componentes de PC"
          className="absolute bottom-0 w-full object-cover -z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
