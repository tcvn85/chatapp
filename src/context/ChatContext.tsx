'use client'

import React, {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react'
import { IChatItem } from '@/types/dataType'
import { CHAT_HISTORY } from '@/libs/constant'

interface IChatContext {
  chatItems: IChatItem[]
  setChatItems: Dispatch<SetStateAction<IChatItem[]>>
}

export const ChatContext = createContext<IChatContext>({
  chatItems: [],
  setChatItems: () => {},
})

export default function ChatProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [chatItems, setChatItems] = useState<IChatItem[]>([])

  useEffect(() => {
    const chatHisttory = localStorage.getItem(CHAT_HISTORY)
    if (chatHisttory) {
      setChatItems(JSON.parse(chatHisttory))
    }
  }, [setChatItems])

  return (
    <ChatContext.Provider value={{ chatItems, setChatItems }}>
      {children}
    </ChatContext.Provider>
  )
}
