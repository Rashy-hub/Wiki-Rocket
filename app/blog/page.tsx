import { getAllBlogsSorted } from '@/lib/getBlogPost'
import BlogItem from './components/BlogItem'
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from 'react-icons/fa'

export default function Blog() {
    const sortedBlogs = getAllBlogsSorted()
    console.log(JSON.stringify(sortedBlogs))
    return (
        <>
            <main className="bg-neutral-300 flex-grow">
                <h2 className="text-4xl font-semibold mb-4 text-center pt-5 pb-5 text-yellow-100  bg-slate-600 border-2 border-t-0">
                    Welcome to our Next js Blog
                    <div className="flex flex-row gap-2 justify-center mt-5">
                        <a
                            href="https://youtube.com"
                            className=" hover:text-yellow-300"
                            target="_blank"
                        >
                            <FaYoutube size={32} />
                        </a>
                        <a
                            href="http://youtube"
                            className=" hover:text-yellow-300"
                        >
                            <FaTwitter size={32} />
                        </a>
                        <a
                            href="http://youtube"
                            className=" hover:text-yellow-300"
                        >
                            <FaGithub size={32} />
                        </a>
                        <a
                            href="http://youtube"
                            className=" hover:text-yellow-300"
                        >
                            <FaLaptop size={32} />
                        </a>
                    </div>
                </h2>
                <br />
                <section className="prose m-auto">
                    {sortedBlogs.map((blog) => {
                        return <BlogItem key={blog.id} blog={blog} />
                    })}
                </section>
            </main>
        </>
    )
}
