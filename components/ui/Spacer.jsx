import React from "react";
import Container from "./Container";

const Spacer = () => {
  return (
    <section className='bg-[url("/assets/spacer.png")] bg-cover'>
      <Container className="min-h-96 text-white flex items-center">
        <div className="">
          <h2 className="text-6xl font-bold max-w-lg">Lorem ipsum dolor sit amet.</h2>
          <p className="text-2xl mt-5 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi tempor
            consectetur adipiscing elit morbi tempor.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Spacer;
