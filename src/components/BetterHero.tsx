"use client";
import "../styles/BetterHero.css";
import bg from "@/public/images/WyunaOilDrop.jpg";
import Image from "next/image";

export default function BetterHero() {
  return (
    <section className=" overflow-hidden flex items-center md:min-h-auto md:bg-white md:flex md:justify-center md:items-center md:overflow-y-hidden text-primary-content">
      <div className=" text-center gap-10 p-10 my-56 md:relative md:flex md:flex-col md:pl-40 md:w-1/2 md:pb-40 md:gap-2 ">
        <div className=" text-3xl font-extrabold md:text-5xl md:align-baseline capitalize md:overflow-x-visible">
          Giving water a second Chance
        </div>
        <div className=" sm:text-wrap">
          India's Premiere Oil Water Water seperation solutions provider.
        </div>
      </div>
      <div className=" hidden md:block sm:relative">
        <Image
          src={bg.src}
          alt="Oil Drop"
          className=" opacity-75 md:overflow-hidden md:opacity-90 md:-translate-y-28"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
