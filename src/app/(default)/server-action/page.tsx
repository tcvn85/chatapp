import { revalidatePath } from 'next/cache'
import AddButton from './AddButton'

const todos: string[] = []

export default function Page() {
  async function addTodo(data: FormData) {
    'use server'
    const todo = data.get('todo') as string

    await new Promise((resolve) => setTimeout(resolve, 2000))

    todos.push(todo)
    revalidatePath('/')
  }

  return (
    <div>
      <h2>Todos</h2>
      {todos.map((todo: string, index: number) => (
        <div className="mb-2" key={index}>
          {todo}
        </div>
      ))}
      <form action={addTodo}>
        <div className="mb-6">
          <label
            htmlFor="todoInput"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Add todo
          </label>
          <input
            id="todoInput"
            name="todo"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder=""
            required
          />
        </div>
        <AddButton />
      </form>
    </div>
  )
}
