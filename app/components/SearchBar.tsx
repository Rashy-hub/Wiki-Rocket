'use client'

import { FormEvent, useState } from 'react'

import { useRouter } from 'next/navigation'

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()
    console.log(`SearchBar components client side mounted`)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log(`searchTerm value is ${searchTerm}`)
        e.preventDefault()
        setSearchTerm('')

        router.push(`/${searchTerm}/`)
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-row justify-center p-2 mt-5 mb-2"
        >
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
                className="text-2xl font-semibold border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
                Search 🚀
            </button>
        </form>
    )
}
