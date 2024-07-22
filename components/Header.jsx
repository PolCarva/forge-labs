import React from "react";
import Container from "./ui/Container";
import Image from "next/image";
import Button from "./ui/Button";

const Header = () => {
  return (
    <Container>
      <header className="flex text-lg text-white py-8 justify-between w-full">
        <Image
          src={"/assets/logo.svg"}
          width={251}
          height={22}
          className="brightness-0 invert"
          alt="Forge Labs Logo"
        />
        <nav className="">
          <ul className="flex gap-10 items-center font-bold">
            <li>
              <Button type="link" href="#" text={"Inicio"} />
            </li>
            <li>
              <Button type="link" href="#" text="Sobre Nosotros"/>
            </li>
            <li>
              <Button type="link" href="#" text={"Ayuda"}/>
            </li>
            <li className="text-black">
              <Button type="button" href={"#"} text="Contactanos" />
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
