type Result = {
    pageid: string
    title: string
    extract: string
    thumbnail?: {
        source: string
        width: number
        height: number
    }
}

type SearchResult = {
    query?: {
        pages?: Result[]
    }
}

type BlogPost = {
    id: string
    title: string
    date: string
}

type Todo = {
    userId: number
    id: number
    title: string
    completed: boolean
}
