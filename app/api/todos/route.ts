import { getTodos, postTodo } from '@/lib/httpRequestsTodos'

import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos'

export async function GET(request: Request) {
    const todos = await getTodos(DATA_SOURCE_URL)
    return NextResponse.json({ todos: todos })
}

export async function POST(request: Request) {
    let receivedPost: Partial<Todo> | null = null
    try {
        receivedPost = await request.json()
        console.log(request.cache)
    } catch (error) {
        return NextResponse.json(
            {
                message: 'request with no body was sent',
            },
            {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
    }

    if (!receivedPost || Object.keys(receivedPost).length === 0)
        return NextResponse.json(
            {
                message:
                    'body must contain new todo or partial todo to Post it',
            },
            {
                status: 401,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
    const postedTodo = await postTodo(DATA_SOURCE_URL, receivedPost)
    return NextResponse.json(postedTodo)
}
