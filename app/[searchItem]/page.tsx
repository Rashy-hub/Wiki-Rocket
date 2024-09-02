import GetWikiData from '@/lib/getWikiData'
import { Content } from 'next/font/google'
import Image from 'next/image'
import NavBar from '../components/NavBar'

type Props = {
    params: {
        searchItem: string
    }
}

// or Dynamic metadata
export async function generateMetadata({ params: { searchItem } }: Props) {
    const WikiData = await GetWikiData(searchItem)
    const data = WikiData?.query?.pages
    if (!data) return { title: 'no Data found' }
    else
        return {
            title: `Wiki Data Result for ${searchItem}`,
        }
}

async function ResultWiki({ params: { searchItem } }: Props) {
    const WikiData = await GetWikiData(searchItem)
    const data = WikiData?.query?.pages

    let content = null
    if (data) {
        content = Object.values(data).map((item) => {
            if (!item.thumbnail) {
                return (
                    <article
                        key={item.pageid}
                        className="border p-4 rounded-md  max-w-full"
                    >
                        <h2 className="text-4xl font-extrabold mb-2">
                            {item.title}
                        </h2>
                        <p className="text-orange-200">{item.extract}</p>
                    </article>
                )
            } else {
                return (
                    <article
                        key={item.pageid}
                        className="border p-4 rounded-md   max-w-full"
                    >
                        <h2 className="text-4xl font-extrabold mb-2">
                            {item.title}
                        </h2>
                        <Image
                            src={item.thumbnail.source}
                            alt="image thumbnail"
                            height={item.thumbnail?.height}
                            width={item.thumbnail.width}
                            className="mb-2 rounded-md"
                        />
                        <p className="text-orange-200 text-2xl font-bold">
                            {item.extract}
                        </p>
                    </article>
                )
            }
        })
    } else {
        content = <h2>No data found</h2>
    }

    return (
        <>
            <NavBar />
            <main className="bg-gray-500 flex-grow">
                <div>{content}</div>
            </main>
        </>
    )
}

export default ResultWiki
