import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import Container from "./ui/Container";

const Hero = () => {
  return (
    <section>
      <Container
        className={"flex text-white items-center h-[calc(100svh-104px)]"}
      >
        <Image
          src={"/assets/hero_img.png"}
          width={1461}
          height={1307}
          className="opacity-55 -z-10 max-w-[60vw] absolute top-0 right-0"
          alt=""
        />
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-[9rem] leading-[6.8rem] -mt-12 uppercase font-black">
            Forge <span className="block">Labs</span>
          </h1>
          <p className="my-4 font-medium text-2xl max-w-xl">
            Explora, compara y ensambla con las mejores herramientas y
            tecnología de última generación.
          </p>
          <div className="text-black">
            <Button size="xl" href={"#"} text={"Comenzar"} type="button" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
