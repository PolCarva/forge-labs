import BuildYourPc from "@/components/BuildYourPc";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import ImageAndText from "@/components/ImageAndText";
import Spacer from "@/components/Spacer";
import ChatBotBubble from "@/components/ui/ChatBotBubble";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ImageAndText />
      <Spacer />
      <FeaturedProducts />
      <BuildYourPc />
      <ChatBotBubble />
      <div className="fixed inset-0 w-svh h-svh overflow-hidden lg:hidden grid bg-black place-content-center">
        <div className="flex flex-col gap-5 items-center text-white">
          <Image
            src={"/assets/logo_small.svg"}
            alt="Logo"
            className="brightness-0 invert"
            width={100}
            height={100}
          />
          <h2 className="text-9xl font-bold">503</h2>
          <p className="text-4xl">La página mobile se está forjando</p>
          <p className="text-4xl">Por favor entrar desde la PC</p>
        </div>
      </div>
    </main>
  );
}
