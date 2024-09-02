import NavBar from './components/NavBar'

export default function Home() {
    return (
        <>
            <NavBar />
            <main className=" bg-stone-600 flex-grow">
                <h2 className="text-2xl font-semibold mb-4 text-center mt-5">
                    Use the search bar to find a wiki article
                </h2>
            </main>
        </>
    )
}
