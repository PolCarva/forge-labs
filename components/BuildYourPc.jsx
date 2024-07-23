import React from "react";
import Container from "./ui/Container";
import HeadingTwo from "./ui/HeadingTwo";
import ComponentSelect from "./ui/ComponentSelect";
import Button from "./ui/Button";
import ThreeDModel from "./ui/ThreeDModel";

const BuildYourPc = () => {
  return (
    <section id="components" className="bg-black text-white py-16">
      <Container>
        <HeadingTwo centered>Arma tu PC</HeadingTwo>
        <div className="grid grid-cols-12 gap-5 py-10">
          <div className="h-full col-span-4 max-h-[50vh]">
            <ThreeDModel modelPath="/assets/pc.glb" />
          </div>
          <div className="grid grid-rows-4 grid-cols-2 gap-5 col-span-8 w-full h-full max-h-[50vh]">
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
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2"></div>
          <Button
            className={"col-span-1 text-black"}
            size="xl"
            type="button"
            href={"/build"}
            text={"Ir a la zona de Forjado"}
          />
        </div>
      </Container>
    </section>
  );
};

export default BuildYourPc;
