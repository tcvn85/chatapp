import { Suspense } from 'react';
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from '@/component/hydrateClient';
import { dehydrate } from "@tanstack/react-query";
import Todo from "./todo";
import type { Metadata } from 'next'

async function getTodo() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')

  if (!res.ok) {
    throw new Error('Failed fetch data');
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
  const dehydratedState = dehydrate(queryClient);
  const data = await getTodo();


  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="col1">
        <h2 className="mb-5 border-b">Next loading data</h2>

        {data?.map((todo: any) => (
          <div key={todo.id}>
            <div className="flex items-center mb-4">
              <input id={`chb-${todo.id}`} readOnly={true} type="checkbox" className="w-4 h-4 rounded" />
              <label htmlFor={`chb-${todo.id}`} className="ml-2 text-sm font-medium textwhite">
                {todo.title}
              </label>
            </div>
          </div>
        ))}

      </div>
      <div className="col2">
        <h2 className="mb-5 border-b">Hydrate</h2>
        <Hydrate state={dehydratedState}>
          <Todo />
        </Hydrate>
      </div>
      <div className="col3">
        <h2 className="mb-5 border-b">Suspense</h2>
        <Suspense fallback={<span>Loading...</span>} >
          <Todo />
        </Suspense>
      </div>
    </div>
  )
}