'use client'

import { useQuery } from '@tanstack/react-query'

async function getTodo() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')

  if (!res.ok) {
    throw new Error('Failed fetch data')
  }

  return res.json()
}

export default function Todo() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodo,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error...</div>
  }

  return (
    <>
      {data?.map((todo: any) => (
        <div key={todo.id}>
          <div className="mb-4 flex items-center">
            <input
              id={`chb-${todo.id}`}
              readOnly={true}
              type="checkbox"
              className="h-4 w-4 rounded"
            />
            <label
              htmlFor={`chb-${todo.id}`}
              className="textwhite ml-2 text-sm font-medium"
            >
              {todo.title}
            </label>
          </div>
        </div>
      ))}
    </>
  )
}
