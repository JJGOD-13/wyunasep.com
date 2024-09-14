import Contact from "./Contact";
export default function GetAQuote() {
  return (
    <section className=" min-h-screen bg-neutral text-base-content ">
      <div className=" flex flex-col justify-center p-10">
        <div className=" flex justify-center capitalize p-10 ">
          <h1 className=" capitalize font-bold text-4xl md:text-5xl ">
            {" "}
            Get a Quote{" "}
          </h1>
        </div>

        <Contact />
      </div>
    </section>
  );
}

