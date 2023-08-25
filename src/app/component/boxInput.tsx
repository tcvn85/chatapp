"use client";

import { useContext, useRef, useState } from "react"
import { IChatItem } from "../types/dataType";
import AppContext from "../context/ChatContext";
import openai from '../libs/openAI'
import { CHAT_HISTORY } from "../libs/constant";



const BoxInput = () => {

  const appContext = useContext(AppContext)
  const inputRef = useRef<any>(null)
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setLoading(true);

      const me: IChatItem = {
        msg: inputRef?.current?.value || 'Empty',
        me: true,
        createDate: Date.now() / 1000
      }

      const appChatData = [...appContext.chatItems];
      
      const answer =  await openai.chat.completions.create({
        messages: [{ role: 'user', content: me.msg }],
        // model: 'gpt-3.5-turbo',
        model: 'gpt-4',
      });

      const bot: IChatItem = {
        msg: answer.choices?.[0]?.message?.content || 'No answer',
        me: false,
        createDate: answer.created
      }

      appChatData.unshift(me, bot);
      appContext.setChatItems(appChatData);

      localStorage.setItem(CHAT_HISTORY, JSON.stringify(appChatData))

      inputRef.current.value = '';

      setLoading(false);
      
    } catch(error) {
      console.log(error);
      setLoading(false);
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <textarea ref={inputRef} name="input" id="inputText" className="bg-gray-50 border border-gray-300 block w-full text-gray-900 text-sm rounded-lg p-2 mb-5" placeholder="Input your question" required></textarea>
      <button type="submit" disabled={loading} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">{loading ? 'Searching...' : 'Submit'}</button>
    </form>
  )
}

export default BoxInput