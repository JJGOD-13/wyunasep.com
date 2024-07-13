import getMarkdownData from "@/components/getMarkdownData"
import { get } from "http"
import fs from 'fs'
import matter from "gray-matter"
import '@/app/blog/[slug]/style.css'
import Markdown from "markdown-to-jsx"

function getPostContent(slug: string) {
    const path_to_file = `blogposts/${slug}.md`
    const content = fs.readFileSync(path_to_file.replaceAll('-', '_'), 'utf8')

    const matterResult = matter(content)
    return matterResult
}

export const getStaticParams = async () => {
    const posts = getMarkdownData('blogposts/') 
    return posts.map((post) => { { slug : post.slug}})
}

export async function generateMetaData({ params, searchParams}){
    const id = params?.slug ? '.' + params?.slug : ''
    return {
        title : `WyunaSep ${id.replaceAll('-', ' ')}`,
    }
}

export default async function Blog( props ) {

    const slug = props.params.slug;
    const post = getPostContent(slug)

    return (
        <main className=" p-10">
            <div className=" flex flex-auto  gap-10   ">
                <Markdown>{post.content}</Markdown>

            </div>
        </main>
    )
}