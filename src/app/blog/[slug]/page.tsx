import getMarkdownData from "@/components/getMarkdownData";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

function getPostContent(slug: string) {
  const path_to_file = `blogposts/${slug}.md`;
  const content = fs.readFileSync(path_to_file.replaceAll("-", "_"), "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const getStaticParams = async () => {
  const posts = getMarkdownData("blogposts/");
  return posts.map((post) => {
    {
      slug: post.slug;
    }
  });
};

export async function generateMetaData({ params, searchParams }) {
  const id = params?.slug ? "." + params?.slug : "";
  return {
    title: `WyunaSep ${id.replaceAll("-", " ")}`,
  };
}

export default async function Blog(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <main className=" flex justify-center p-10">
      <div className="">
        <article className=" prose prose-neutral prose-md md:prose-lg prose-h1:text-5xl prose-h2:underline prose-h2:underline-offset-4 prose-h2:text-4xl prose-h2:text-primary-content">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </main>
  );
}

