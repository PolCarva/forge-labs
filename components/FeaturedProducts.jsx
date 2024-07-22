import React from "react";
import Container from "./ui/Container";
import HeadingTwo from "./ui/HeadingTwo";
import Image from "next/image";
import ProductCard from "./ui/ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="text-black bg-white">
      <Container className={"pt-16"}>
        <HeadingTwo centered>Productos Destacados</HeadingTwo>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <ProductCard
            title={"Producto 1"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus perferendis autem placeat voluptate iusto fugit et."
            }
            src={"/assets/working_in_pc_parts.png"}
          />
          <ProductCard
            title={"Producto 1"}
            text={
              "Enim, facilis! Nesciunt ipsa eaque mollitia consequuntur numquam at molestias laudantium."
            }
            src={"/assets/working_in_pc_parts.png"}
          />
          <ProductCard
            title={"Producto 1"}
            text={
              "Dolorum at quas nostrum veritatis, aliquam mollitia modi, magnam est culpa repellendus, ad facere exercitationem debitis reprehenderit praesentium deserunt tenetur."
            }
            src={"/assets/working_in_pc_parts.png"}
          />
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
