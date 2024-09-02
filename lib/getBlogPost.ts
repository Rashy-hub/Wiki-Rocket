import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

//recuperer le chemin du dossier blogpost
const blogDirectory = path.join(process.cwd(), 'blogposts')

export async function getBlogPostById(id: string) {
    const fullPath = path.join(blogDirectory, `${id}.md`)
    const blogContent = fs.readFileSync(fullPath, 'utf-8')
    //Gray matter permettra de directement parser le contenu de blogCOntent
    const parsedContent = matter(blogContent)
    //use Remark to process it into html
    const processedContent = await remark()
        .use(html)
        .process(parsedContent.content)
    const htmlContent = processedContent.toString()
    const blogPostWithHtml: BlogPost & { htmlContent: string } = {
        id,
        title: parsedContent.data.title,
        date: parsedContent.data.date,
        htmlContent,
    }

    return blogPostWithHtml
}

export function getAllBlogsSorted() {
    const filesNames = fs.readdirSync(blogDirectory)
    const AllBlogsData = filesNames.map((fileName) => {
        const parsedPath = path.parse(fileName)
        const fullPath = path.join(blogDirectory, fileName)
        const blogContent = fs.readFileSync(fullPath, 'utf-8')
        //Gray matter permettra de directement parser le contenu de blogCOntent
        const parsedContent = matter(blogContent)
        const blogPost: BlogPost = {
            id: parsedPath.name,
            title: parsedContent.data.title,
            date: parsedContent.data.date,
        }
        return blogPost
    })
    return AllBlogsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}
