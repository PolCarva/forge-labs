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
      <ChatBotBubble/>
      <div className="fixed inset-0 md:hidden grid bg-black place-content-center">
        <Image src={"/assets/logo_small.svg"} alt="Logo" width={100} height={100} />
      </div>
    </main>
  );
}
