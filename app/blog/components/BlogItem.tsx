import { getBlogPostById } from '@/lib/getBlogPost'

type Props = { blog: BlogPost }

async function BlogItem({ blog }: Props) {
    const finaldata = await getBlogPostById(blog.id)

    const content =
        finaldata === null ? (
            <p>En attente</p>
        ) : (
            <article>
                <h3>{finaldata.title}</h3>
                <div
                    dangerouslySetInnerHTML={{ __html: finaldata.htmlContent }}
                ></div>
                <span>
                    {finaldata.date} - {finaldata.id}
                </span>
            </article>
        )
    return <>{content}</>
}

export default BlogItem
