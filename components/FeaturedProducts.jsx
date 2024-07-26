import React from "react";
import Container from "./ui/Container";
import HeadingTwo from "./ui/HeadingTwo";
import ProductCard from "./ui/ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="text-black bg-white py-16">
      <Container className={"pt-16"}>
        <HeadingTwo centered>Encuentra lo que necesitas</HeadingTwo>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <ProductCard
            title={"Experimenta"}
            isInverted={true}
            text={
              "Descubre el potencial y las limitaciones de tus componentes con nuestra herramienta de benchmarking."
            }
            src={"/assets/ilustracion_ciencia_pendrive_posta.png"}
          />

          <ProductCard
            title={"Relájate"}
            text={
              "Despreocúpate de los problemas que conlleva la construcción de una PC. Nuestro asistente de IA te guiará en cada paso del proceso."
            }
            src={"/assets/ilustracion_relax_ssd.png"}
          />
          <ProductCard
            title={"Comprende"}
            text={
              "Aprende sobre cada componente y su función en tu sistema. Nuestra interfaz 3D te mostrará cada detalle de tu PC."
            }
            src={"/assets/working_in_pc_parts.png"}
          />
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
