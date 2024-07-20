import React from "react";
import Container from "./ui/Container";
import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <header className="flex py-8 justify-between w-full">
        <Image
          src={"/assets/logo.svg"}
          width={251}
          height={22}
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
            <li>
              <Button type="button" href={"#"} text="Contactanos" />
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
