"use client"

import React, { useState } from "react";
import Container from "./ui/Container";
import HeadingTwo from "./ui/HeadingTwo";
import ComponentSelect from "./ui/ComponentSelect";
import Button from "./ui/Button";
import ThreeDModel from "./ui/ThreeDModel";
import { ModalProvider } from "@/context/ModalContext";
import Modal from "./ui/Modal";

const components = [ {
  type: "Placa Madre",
  endpoint: "motherboards"
}, {
  type: "CPU",
  endpoint: "procesadores"
}, {
  type: "GPU",
  endpoint: "tarjetas_de_video"
}, {
  type: "Cooler",
  endpoint: "coolers"
}, {
  type: "Fuente de Poder",
  endpoint: "motherboards"
}, {
  type: "RAM",
  endpoint: "memorias"
}, {
  type: "Almacenamiento",
  endpoint: "almacenamiento"
}, {
  type: "Gabinete",
  endpoint: "gabinetes"
}];

const BuildYourPc = () => {
  const [selectedComponents, setSelectedComponents] = useState({});
  const [totalCost, setTotalCost] = useState(0);

  const updateComponentSelection = (componentType, component) => {
    setSelectedComponents(prev => ({ ...prev, [componentType]: component }));
    setTotalCost(
      Object.values({ ...selectedComponents, [componentType]: component })
        .reduce((acc, item) => acc + item.Precio, 0)
    );
  };

  return (
    <section id="components" className="bg-black text-white py-16">
      <Container>
        <HeadingTwo centered>Arma tu PC</HeadingTwo>
        <div className="grid grid-cols-12 gap-5 py-10">
          {/* 3D Model */}
          <div className="h-full col-span-4 max-h-[50vh]">
            <ThreeDModel modelPath={"/pc.glb"} />
          </div>
          <ModalProvider>
            <div className="grid grid-rows-4 grid-cols-2 gap-5 col-span-8 w-full h-full max-h-[50vh]">
              {components.map((component) => (
                <ComponentSelect
                  key={component.type}
                  src={selectedComponents[component.type]?.IMG ||"/assets/component.png"}
                  price={selectedComponents[component.type]?.Precio || 0}
                  title={component.type}
                  desc={(selectedComponents[component.type]?.Titulo || "Seleccione componente")}
                  endpoint={component.endpoint}
                  updateSelection={updateComponentSelection}
                  componentType={component.type}
                  isActive={!!selectedComponents[component.type]}
                />
              ))}
            </div>
            <Modal />
          </ModalProvider>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2 text-2xl font-bold">
            Costo Total: ${totalCost.toFixed(2)}
          </div>
          <Button
            className={"col-span-1 text-black"}
            size="xl"
            type="button"
            href={"/build"}
            text={"Ir a la Zona de Forjado"}
          />
        </div>
      </Container>
    </section>
  );
};

export default BuildYourPc;
