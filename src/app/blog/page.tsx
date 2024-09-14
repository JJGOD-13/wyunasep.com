import getMarkdownData from "@/components/getMarkdownData";
import Link from "next/link";

const postData = getMarkdownData("blogposts/");

export default function Blog() {
  return (
    <main className=" p-10">
      <div className=" flex flex-wrap justify-center gap-10  md:flex-auto  md:gap-5 md:justify-evenly">
        {postData.map((value, index) => {
          return <BlogCard key={index} md={value} />;
        })}
      </div>
    </main>
  );
}

function BlogCard(props: {
  md: { title: any; description: any; slug: string };
}) {
  const { md } = props;
  return (
    <Link href={`blog/${md.slug}`}>
      <div className=" card card-normal shadow-xl bg-neutral w-96 text-neutral-content  ">
        <div className=" card-body">
          <h1 className=" card-title  ">{md.title}</h1>
          <p className=" text-neutral-content"> {md.description}</p>
        </div>
      </div>
    </Link>
  );
}
