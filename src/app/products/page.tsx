import Link from "next/link"
interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
}
const products = [
{
    title: "Hydrocyclone",
    description: "Our State of the art product delivering preicse seperation for almost all needs.",
    image: "link/to/image",
    link: "/blog/hydrocyclone"
},
{
    title: "Oil Skimmer",
    description: "Our best Oil Skimmer Product.",
    image: "link/to/image",
    link: "/blog/skimmer"
},
{
    title: "Floating Skimmer",
    description: "Floating skimmer to allow for different use cases.",
    image: "link/to/image",
    link: "/blog/floatingskimmer"
}
]

export default function Products() {

  // TODO: Need to make this read from a csv file or something.
  return (
    <section className=" flex flex-wrap   items-center justify-center m-10 md:m-0  h-fit  p-10 md:p-20  justify-items-center gap-10   ">
        {products.map((product, index) => (
          <DaisyCard key={index} product={product} />
        ))}
    </section>
  )
}


function DaisyCard({ product }: { product: Product }) {

  return (
    <div className=" card card-compact p-2 md:card-normal w-[300px]   bg-base-100 h-fit md:h-[240px] md:w-[400px]  ">
      <div className=" card-body  ">
        <h2 className=" card-title  justify-center md:justify-normal text-center md:text-start ">{product.title}</h2>
        <p className=" justify-center text-center text-balance md:text-start ">{product.description}</p>
      </div>
      <div className=" card-actions justify-center mb-2 md:justify-end md:pr-5 md:pb-5 ">
        <Link href={product.link} className=" btn btn-sm md:btn-md btn-primary ">Read More</Link>
      </div>
    </div>
  );
}
