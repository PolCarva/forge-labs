import BuildYourPc from "@/components/BuildYourPc";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import ImageAndText from "@/components/ImageAndText";
import Spacer from "@/components/Spacer";
import ChatBotBubble from "@/components/ui/ChatBotBubble";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ImageAndText />
      <Spacer />
      <FeaturedProducts />
      <BuildYourPc />
      <ChatBotBubble/>
     
    </main>
  );
}
