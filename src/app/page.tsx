import Image from "next/image";
import { HeaderMenu } from "./components/HeaderMenu";
import { HeroImageBackground } from "./components/HeroImageBackground";
import Product from "./components/ProductOverview";
import { Space } from "@mantine/core";

export default function Home() {
  return (
   <main>
    <HeroImageBackground />
    <Space h="xl" />
    <Space h="lg" />
    <Product />
   </main> 
  );
}
