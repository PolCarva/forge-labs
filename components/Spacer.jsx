import React from "react";
import Container from "./ui/Container";
import HeadingTwo from "./ui/HeadingTwo";

const Spacer = () => {
  return (
    <section className='bg-[url("/assets/spacer.png")] bg-cover'>
      <Container className="min-h-96 text-white flex items-center">
        <div>
          <HeadingTwo>Lorem Ipsum Dolor sit amet.</HeadingTwo>
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
