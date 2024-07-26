import React from "react";
import Container from "./ui/Container";
import HeadingTwo from "./ui/HeadingTwo";

const Spacer = () => {
  return (
    <section className='bg-[url("/assets/spacer.png")] bg-cover'>
      <Container className="min-h-96 py-32 text-white flex items-center">
        <div>
          <HeadingTwo className="max-w-3xl">Interfaz 3D Intuitiva</HeadingTwo>
          <p className="text-2xl mt-5 max-w-2xl">
            Nuestra interfaz 3D hace que la experiencia de armar una PC sea
            sencilla y fácil de entender. Visualiza cada componente y su
            ubicación exacta en tu sistema para un ensamblaje sin
            complicaciones.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Spacer;
