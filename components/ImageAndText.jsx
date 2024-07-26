import React from "react";
import Container from "./ui/Container";
import Image from "next/image";
import HeadingTwo from "./ui/HeadingTwo";

const ImageAndText = () => {
  return (
    <section className="bg-white text-black  h-[80vh]">
      <Container className="flex h-full justify-between gap-40 items-center">
        <Image
          src={"/assets/working_man.png"}
          width={489.54}
          height={382.12}
          alt="Working Man"
        />
        <div className="max-w-lg">
          <HeadingTwo>Asistente de IA Integrado</HeadingTwo>
          <p className="text-2xl mt-5">
            Forge Labs cuenta con una IA integrada que resuelve todas tus dudas.
            Desde recomendaciones de componentes hasta solución de problemas
            técnicos, nuestra IA está aquí para ayudarte en cada paso del
            proceso.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ImageAndText;
