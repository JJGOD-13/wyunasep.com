import getMarkdownData from "@/components/getMarkdownData"
import { link } from "fs/promises"
import Link from "next/link"

const postData = getMarkdownData('blogposts/')

export default function Blog() {
  return (
    <main className=" p-10">
      <div className=" flex flex-auto  gap-10   ">
        {postData.map((value, index) => {
          return (
            <BlogCard key={index} md={value} />
          )
        })}
      </div>
    </main>
  )
}


function BlogCard(props: { md: { title: any, description: any, slug: string } }) {
  const { md } = props
  return (
    <Link href={`blog/${md.slug}`} >

      <div className=" card card-normal shadow-xl bg-neutral w-96   ">
        <div className=" card-body">
          <h1 className=" card-title  ">{md.title}</h1>
          <p className=" text-neutral-content"> {md.description}</p>
        </div>
      </div>

    </Link>
  )
}
