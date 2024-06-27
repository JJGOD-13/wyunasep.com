import Image from "next/image";

export default function Clients() {
    return (
        <section className="  h-1/3 p-10 min-h-56 ">
            <div className=" flex flex-col items-center  justify-center h-1/2  ">
                <h1 className=" capitalize font-bold text-5xl "> Our Sponsors  </h1>

                <div>

                    <Image src={""} alt={""} />
                    <Image src={""} alt={""} />
                    <Image src={""} alt={""} />
                    <Image src={""} alt={""} />


                </div>

            </div>
        </section>
    )
}