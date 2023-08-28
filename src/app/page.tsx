import ShowChat from '@/component/showChat'
import BoxInput from '@/component/boxInput'
import ChatProvider from '@/context/ChatContext'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chat GPT App',
  description: 'Chat GPT App',
}

export default function Page() {
  return (
    <ChatProvider>
      <main className="p-10">
        <div className="grid grid-cols-5 gap-10">
          <div className="col-span-2">
            <BoxInput />
          </div>
          <div className="col-span-3">
            <div className="rounded border p-5">
              <ShowChat />
            </div>
          </div>
        </div>
      </main>
    </ChatProvider>
  )
}
