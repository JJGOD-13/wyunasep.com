import Image from "next/image";
import { promises as fs } from "fs";
import React from "react";
import path from "path";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const folder = "/public/Logos";

export default async function Clients() {
  const images = (require as any).context("/public/Logos", true);
  const ImageList = images.keys().map((image: any) => images(image));
  return (
    <section className="  h-1/3 p-10 min-h-56 bg-neutral text-base-content ">
      <div className=" flex flex-col items-center  justify-center h-1/2  ">
        <h1 className=" capitalize font-bold text-5xl "> Our Clients </h1>

        <div className=" flex justify-around w-full p-10 align-baseline">
          {ImageList.map(
            (image: { default: string | StaticImport }, index: any) => (
              <>
                <div className=" relative w-[50px] h-[50px] align-middle   md:w-[80px] md:h-[80px] md:pt-10 md:pb-10">
                  <Image src={image.default} alt={`image-${index}`} />
                </div>
              </>
            )
          )}
        </div>
      </div>
    </section>
  );
}
