import Image from "next/image";
import Oildrop from "@/public/images/WyunaOilDrop.jpg";

export function Product() {
  return (
    <section className=" text-primary ">
      <div className=" min-h-80 w-auto rounded-r-lg bg-neutral text-base-content">
        <div className=" flex flex-col content-center justify-center p-20 gap-10 md:p-10 md:flex-row md:gap-1 md:justify-evenly  ">
          <div className=" grid grid-cols-1 content-center justify-center justify-items-center text-center md:text-left md:justify-items-start   gap-5  md:justify-items-left md:text-balance md:justify-center md:pl-[5rem] lg:pl-[15rem] ">
            <h1 className="font-semibold  text-3xl  md:text-5xl w-auto  ">
              Hydro-Cyclone Efficiency
            </h1>
            <h5 className=" md:w-1/2   ">
              Our Hydro-cyclone technology provides unmatched separation
              capabilities. Allowing for faster, more efficient separation with
              a much smaller footprint.
            </h5>
          </div>
          <div className=" flex  items-center content-center justify-center lg:w-3/6 lg:justify-start lg:pr-[5rem]  md:w-3/4 lg:pt-10 ">
            <ul className=" grid grid-cols-2 text-center  flex-col sm: lg:grid-cols-1 lg:text-start lg:list-disc list-outside lg:list-inside  ">
              <li key={1} className=" p-5  lg:p-4 lg:text-xl">
                No moving parts
              </li>
              <li key={2} className=" p-5  lg:p-4 lg:text-xl">
                No chemicals
              </li>
              <li key={3} className=" p-5  lg:p-4 lg:text-xl">
                No settling period
              </li>
              <li key={4} className=" p-5  lg:p-4 lg:text-xl">
                {" "}
                Self Cleaning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OilSkimmer() {
  return (
    <section className=" bg-neutral text-base-content ">
      <div className=" min-h-80 w-auto xl:px-20">
        <div className="flex flex-col-reverse gap-10 p-10 md:p-10 md:gap-20  justify-evenly text-center  md:flex-row md:content-center  md:justify-evenly  ">
          <div className=" flex justify-center">
            {/* Need a 16:9 image here */}
            <Image
              src={Oildrop}
              alt={"OilDrop"}
              width={200}
              height={300}
              className=" rounded-lg"
            />
          </div>
          <div className=" grid grid-cols-1 gap-0 justify-center md:text-right md:w-1/3 md:justify-end text-center   ">
            <h1 className="font-semibold  text-3xl  md:text-5xl w-auto md:mb-0 md:pb-0 ">
              Oil Skimmers{" "}
            </h1>
            <p className=" md:pb-20 text-balance md:text-right">
              {" "}
              Our floating skimmer technology provides ease of installation and
              performant oil removal in any context
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

