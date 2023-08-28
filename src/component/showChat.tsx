'use client'

import { useContext } from "react";
import {ChatContext} from "@/context/ChatContext";

const ShowChat = () => {

  const chatContext = useContext(ChatContext)

  return (
    <ul>
      {chatContext?.chatItems?.map((item, index) => (
        <li className="mb-2" key={index}>
          {item.me ? (
            <div className="text-left">
              <span className="text-white text-opacity-60">Me: </span>
              <span>{item.msg}</span>
            </div>
          ) : (
            <div className="text-left">
              <span className="text-white text-opacity-60">Bot: </span>
              <span>{item.msg}</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default ShowChat