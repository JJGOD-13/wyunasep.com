import fs from 'fs'
import matter from 'gray-matter'

export default function getMarkdownData(pathtodir: string) {

  const files = fs.readdirSync(pathtodir);
  const MDfiles = files.filter(file => file.endsWith(".md"))

  // get file metadata

  const metadata = MDfiles.map((filename) => {
    const fileContents = fs.readFileSync(`${pathtodir}${filename}`, 'utf8');
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      slug: filename.replace('.md', '').replace('_', ' ')
    };

  })

  return metadata

}
