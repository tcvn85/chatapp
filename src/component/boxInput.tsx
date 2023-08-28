'use client'

import { useContext, useRef, useState } from 'react'
import { IChatItem } from '@/types/dataType'
import { ChatContext } from '@/context/ChatContext'
import openai from '@/libs/openAI'
import { CHAT_HISTORY } from '@/libs/constant'

const BoxInput = () => {
  const appContext = useContext(ChatContext)
  const inputRef = useRef<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      setLoading(true)

      const me: IChatItem = {
        msg: inputRef?.current?.value || 'Empty',
        me: true,
        createDate: Date.now() / 1000,
      }

      const appChatData = [...appContext.chatItems]

      const answer = await openai.chat.completions.create({
        messages: [{ role: 'user', content: me.msg }],
        // model: 'gpt-3.5-turbo',
        model: 'gpt-4',
      })

      const bot: IChatItem = {
        msg: answer.choices?.[0]?.message?.content || 'No answer',
        me: false,
        createDate: answer.created,
      }

      appChatData.unshift(me, bot)
      appContext.setChatItems(appChatData)

      localStorage.setItem(CHAT_HISTORY, JSON.stringify(appChatData))

      inputRef.current.value = ''

      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        ref={inputRef}
        name="input"
        id="inputText"
        className="mb-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900"
        placeholder="Input your question"
        required
      ></textarea>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        {loading ? 'Searching...' : 'Submit'}
      </button>
    </form>
  )
}

export default BoxInput
