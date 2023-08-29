'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function AddButton() {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={pending}
      type="submit"
      className="mb-5 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
    >
      Add todo
    </button>
  )
}
