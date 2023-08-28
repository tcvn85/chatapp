import { Suspense } from 'react'
import getQueryClient from '@/utils/getQueryClient'
import Hydrate from '@/component/hydrateClient'
import { dehydrate } from '@tanstack/react-query'
import Todo from './todo'
import type { Metadata } from 'next'
import Image from 'next/image'
import variables from '@/styles/_variables.module.scss'

async function getTodo() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')

  if (!res.ok) {
    throw new Error('Failed fetch data')
  }

  return res.json()
}

export const metadata: Metadata = {
  title: 'Todo',
  description: 'Todo',
}

export default async function Page() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['todos', getTodo])
  const dehydratedState = dehydrate(queryClient)
  const data = await getTodo()

  return (
    <div
      className="grid grid-cols-3 gap-10"
      style={{ color: variables.primaryColor }}
    >
      <div className="col1">
        <h2 className="mb-5 border-b">Next loading data</h2>
        <Image
          src="https://images.unsplash.com/photo-1693057891644-3765385db36c"
          alt="Picture of the author"
          className="mb-5 w-full"
          width={400}
          height={200}
        />

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
      </div>
      <div className="col2">
        <h2 className="mb-5 border-b">Hydrate</h2>

        <Image
          alt="Mountains"
          src="/assets/demo-img.avif"
          quality={100}
          width={400}
          height={200}
          className="mb-5 w-full"
        />
        <Hydrate state={dehydratedState}>
          <Todo />
        </Hydrate>
      </div>
      <div className="col3">
        <h2 className="mb-5 border-b">Suspense</h2>
        <Suspense fallback={<span>Loading...</span>}>
          <Todo />
        </Suspense>
      </div>
    </div>
  )
}
