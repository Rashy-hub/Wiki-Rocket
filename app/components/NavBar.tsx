import SearchBar from './SearchBar'
import Link from 'next/link'

function NavBar() {
    return (
        <div className=" bg-slate-600 border-2 border-t-0">
            <p className="text-2xl font-extrabold text-yellow-200 text-center mt-2">
                ❓ Wanna visit our <Link href={'/blog'}>blog ❓</Link>
            </p>
            <SearchBar />
        </div>
    )
}

export default NavBar
