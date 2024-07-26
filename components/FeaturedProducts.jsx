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
            title={"Procesador Intel Core i9-11900K"}
            text={
              "Descubre el poder y la velocidad con el procesador Intel Core i9-11900K. Con 8 núcleos y 16 hilos, este procesador de última generación está diseñado para ofrecer un rendimiento excepcional en tareas multitarea y juegos de alta demanda. Perfecto para usuarios que buscan la máxima potencia en sus sistemas."
            }
            src={"/assets/working_in_pc_parts.png"}
          />
          <ProductCard
            title={"Tarjeta Gráfica NVIDIA GeForce RTX 3080"}
            text={
              "Eleva tu experiencia de juego y creación de contenido con la tarjeta gráfica NVIDIA GeForce RTX 3080. Equipada con la arquitectura Ampere de NVIDIA, esta tarjeta ofrece un rendimiento sin precedentes, trazado de rayos en tiempo real y capacidades de inteligencia artificial avanzadas. Ideal para gamers y profesionales del diseño gráfico."
            }
            src={"/assets/working_in_pc_parts.png"}
          />
          <ProductCard
            title={"Unidad de Estado Sólido Samsung 970 EVO Plus"}
            text={
              "Acelera tu sistema con la unidad de estado sólido Samsung 970 EVO Plus. Con velocidades de lectura y escritura secuenciales de hasta 3,500 MB/s y 3,300 MB/s respectivamente, esta SSD garantiza tiempos de carga ultrarrápidos y una experiencia de usuario fluida. Perfecta para usuarios que necesitan almacenamiento rápido y fiable."
            }
            src={"/assets/working_in_pc_parts.png"}
          />
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
