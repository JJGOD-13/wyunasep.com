import getMarkdownData from "@/components/getMarkdownData";
import Link from "next/link"
interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
}
let products1 = [
{
    title: "Hydrocyclone",
    description: "Our State of the art product delivering preicse seperation for almost all needs.",
    image: "link/to/image",
    link: "/blog/Hydrocyclone"
},
{
    title: "Oil Skimmer",
    description: "Our best Oil Skimmer Product.",
    image: "link/to/image",
    link: "/blog/Oil_Skimmer"
},
{
    title: "Floating Skimmer",
    description: "Floating skimmer to allow for different use cases.",
    image: "link/to/image",
    link: "/blog/Floating_Skimmer"
},
{
  title: "Coolant Filter",
  description: "Efficient Coolant Filtration for a wide range of applications.",
  image: "@/public/images/Wyunasep Coolant Filtration.jpeg",
  link: "/blog/Coolant_Filter"

}
]


const products: Product[] = getMarkdownData('blogposts/').map((data: any) => ({
  title: data.title,
  description: data.description,
  image: data.image,
  link: data.link,
}));


export default function Products() {

  // TODO: Need to make this read from a csv file or something.
  return (
    <section className=" flex flex-wrap   items-center justify-center m-10 md:m-0  h-fit  p-10 md:p-20  justify-items-center gap-10 bg-base-100 ">
        {products.map((product, index) => (
          <DaisyCard key={index} product={product} />
        ))}
    </section>
  )
}


function DaisyCard({ product }: {product: Product}) {

  return (
    <div className=" card card-compact p-2 md:card-normal w-[300px]   bg-neutral h-fit md:h-[240px] md:w-[400px] text-base-content  ">
      <div className=" card-body  ">
        <h2 className=" card-title  justify-center md:justify-normal text-center md:text-start ">{product.title}</h2>
        <p className=" justify-center text-center text-balance md:text-start ">{product.description}</p>
      </div>
      <div className=" card-actions justify-center mb-2 md:justify-end md:pr-5 md:pb-5 ">
        <Link href={product.link} className=" btn btn-sm md:btn-md btn-info text-info-content ">Read More</Link>
      </div>
    </div>
  );
}
