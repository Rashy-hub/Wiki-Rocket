import Link from 'next/link'

type Props = { title: string }

function Header({ title }: Props) {
    return (
        <header
            id="animated-header"
            className=" bg-slate-600 p-5 border-2 border-b-0 sticky top-0 "
        >
            <h1 className="text-4xl font-extrabold text-yellow-200 text-center">
                <Link href={'/'}>{title}</Link>
            </h1>
        </header>
    )
}

export default Header
