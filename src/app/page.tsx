import GetAQuote from "@/components/GetAQuote";
import Clients from "@/components/Clients";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import { Product, OilSkimmer} from "@/components/ProductOutline";
import Image from "next/image";
import BetterHero from "@/components/BetterHero";

export default function Home() {
  return (
    <main className=" bg-neutral">
      {/* <Hero /> */}
      <BetterHero />
      <Product />
      <OilSkimmer />
      <Carousel />
      <Clients />
      <GetAQuote />

    </main>
  );
}
