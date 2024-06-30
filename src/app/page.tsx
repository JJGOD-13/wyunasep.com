import GetAQuote from "@/components/GetAQuote";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import { Product, OilSkimmer} from "@/components/ProductOutline";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Product />
      <OilSkimmer />
      <Clients />
      <GetAQuote />

    </main>
  );
}
