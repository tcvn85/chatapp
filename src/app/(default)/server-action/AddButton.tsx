'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function AddButton() {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={pending}
      type="submit"
      className={`${
        pending ? 'cursor-not-allowed' : ''
      } text-whitesm:w-auto mb-5 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium`}
    >
      Add todo
    </button>
  )
}
