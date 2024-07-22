import React from "react";
import Container from "./Container";
import Image from "next/image";

const ImageAndText = () => {
  return (
    <section className="bg-white h-[80vh]">
      <Container className="flex h-full justify-between gap-40 items-center">
        <Image
          src={"/assets/working_man.png"}
          width={489.54}
          height={382.12}
          alt="Working Man"
        />
        <div className="max-w-lg">
          <h2 className="text-black font-bold text-6xl">Lorem Ipsum Dolor sit amet.</h2>
          <p className="text-2xl mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tempor
            consectetur adipiscing elit morbi tempor.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ImageAndText;
