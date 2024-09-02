export async function getTodos(url: string): Promise<Todo[]> {
    const rawData = await fetch(url)
    const data = await rawData.json()
    console.log(data)
    const parsedData: Todo[] = data
    return parsedData
}
export async function postTodo(
    url: string,
    todo: Partial<Todo>
): Promise<Todo> {
    const headers = new Headers()

    headers.append('Content-Type', 'text/json')
    headers.append('Accept', 'application/json')
    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(todo),
    })
    const data = await response.json()

    return data
}
