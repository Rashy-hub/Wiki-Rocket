import Link from 'next/link'

function NavBar() {
    return (
        <header className=" bg-slate-600 p-5 border-2 sticky top-0 drop-shadow-xl">
            <h1 className="text-4xl font-extrabold text-yellow-200 text-center ">
                WikiRocket Blog
            </h1>
            <p className=" text-2xl font-extrabold text-yellow-200 text-center mt-2">
                ❓ Check our <Link href={'/'}>search tool </Link>
            </p>
        </header>
    )
}

export default NavBar
