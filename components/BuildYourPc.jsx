import React from "react";
import Container from "./ui/Container";
import HeadingTwo from "./ui/HeadingTwo";
import Image from "next/image";
import ComponentSelect from "./ui/ComponentSelect";

const BuildYourPc = () => {
  return (
    <section id="components" className="bg-white pt-16">
      <Container>
        <HeadingTwo centered>Arma tu PC</HeadingTwo>
        <div className="grid grid-cols-12 gap-5 py-10">
          <Image
            src={"/assets/pc.png"}
            alt="PC Image"
            width={348}
            height={453}
            className="h-full object-contain col-span-4"
          />
          <div className="grid grid-rows-4 grid-cols-2 gap-5 col-span-8 w-full h-full">
            <ComponentSelect
              src={"/assets/component.png"}
              title={"Placa Madre"}
              desc={"NVIDIA GeForce RTX 3070"}
            />
            <ComponentSelect
              src={"/assets/component.png"}
              title={"CPU"}
              desc={"NVIDIA GeForce RTX 3070"}
            />
            <ComponentSelect
              src={"/assets/component.png"}
              title={"GPU"}
              desc={"NVIDIA GeForce RTX 3070"}
            />
            <ComponentSelect
              src={"/assets/cooler.png"}
              title={"Cooler"}
              desc={"NVIDIA GeForce RTX 3070"}
            />
            <ComponentSelect
              src={"/assets/component.png"}
              title={"Fuente de Poder"}
              desc={"NVIDIA GeForce RTX 3070"}
            />
            <ComponentSelect
              src={"/assets/component.png"}
              title={"RAM"}
              desc={"NVIDIA GeForce RTX 3070"}
            />
            <ComponentSelect
              src={"/assets/component.png"}
              title={"Almacenamiento"}
              desc={"NVIDIA GeForce RTX 3070"}
            />
            <ComponentSelect
              src={"/assets/component.png"}
              title={"Gabinete"}
              desc={"NVIDIA GeForce RTX 3070"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BuildYourPc;
