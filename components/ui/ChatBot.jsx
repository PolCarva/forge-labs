"use client";

import { prompts, replies } from "@/data/chatbotData";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const ChatBot = ({ close }) => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hola! Soy Forgie, en qué te puedo ayudar?" },
  ]);
  const [botTyping, setBotTyping] = useState(false);
  const inputRef = useRef(null);

  const normalizeText = (text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f¡!¿?.,;:()'"`]/g, "")
      .toLowerCase();
  };

  const findReply = (input) => {
    const normalizedInput = normalizeText(input);
    for (let i = 0; i < prompts.length; i++) {
      const normalizedPrompts = prompts[i].map((prompt) =>
        normalizeText(prompt)
      );
      if (normalizedPrompts.includes(normalizedInput)) {
        const randomReply =
          replies[i][Math.floor(Math.random() * replies[i].length)];
        return randomReply;
      }
    }
    return "Lo siento, no entiendo la pregunta.";
  };

  const updateChat = (input) => {
    if (input.trim()) {
      const userMessage = { from: "user", text: input.trim() };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      inputRef.current.value = "";

      setBotTyping(true);

      setTimeout(() => {
        setBotTyping(false);
        const botResponse = { from: "bot", text: findReply(input) };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
        scrollChat();
      }, 1500);
    }
  };

  const scrollChat = () => {
    const messagesContainer = document.getElementById("messages");
    messagesContainer.scrollTop =
      messagesContainer.scrollHeight - messagesContainer.clientHeight;
  };

  useEffect(() => {
    scrollChat();
  }, [messages]);

  return (
    <div className="shadow-lg">
      <button
        onClick={close}
        className="w-full border bg-black h-10 flex items-center px-5 justify-end"
      >
        {" "}
        <span className="h-1 w-8 block bg-white"></span>
      </button>
      <div className="flex-1 max-h-[70svh] max-w-md min-w-[28rem] p-2 sm:p-6 justify-between flex flex-col h-screen bg-white">
        <div
          id="messages"
          className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar"
        >
          {messages.map((message, key) => (
            <div key={key}>
              <div
                className={`flex items-end ${
                  message.from === "bot" ? "" : "justify-end"
                }`}
              >
                <div
                  className={`flex flex-col space-y-2 text-md leading-tight min-w-sm max-w-sm mx-2 ${
                    message.from === "bot"
                      ? "order-2 items-start"
                      : "order-1 items-end"
                  }`}
                >
                  <div>
                    <span
                      className={`px-4 py-3 rounded-xl inline-block ${
                        message.from === "bot"
                          ? "rounded-bl-none bg-gray-100 text-gray-600"
                          : "rounded-br-none bg-black text-white"
                      }`}
                    >
                      {message.text}
                    </span>
                  </div>
                </div>
                <Image
                  src={
                    message.from === "bot"
                      ? "/assets/logo_small.svg"
                      : "/assets/profile.webp"
                  }
                  width={50}
                  height={50}
                  alt="Profile Pic"
                  className={`size-6 ${
                    message.from === "bot" ? "order-1" : "rounded-full order-2"
                  }`}
                />
              </div>
            </div>
          ))}
          {botTyping && (
            <div className="flex items-end">
              <div className="flex flex-col space-y-2 text-md leading-tight mx-2 order-2 items-start">
                <div>
                  <Image
                    src="/assets/tiping.gif"
                    alt="..."
                    className="w-16 ml-6"
                    width={256}
                    height={164}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Pregunta algo..."
              autoComplete="off"
              autoFocus={true}
              onKeyDown={(e) => e.key === "Enter" && updateChat(e.target.value)}
              className="text-md w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 pr-16 bg-gray-100 border-2 border-gray-200 focus:border-black rounded-full py-2"
              ref={inputRef}
            />
            <div className="absolute right-2 items-center inset-y-0 hidden sm:flex">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full size-8 transition duration-200 ease-in-out text-white bg-black hover:bg-black/80 focus:outline-none"
                onClick={() => updateChat(inputRef.current.value)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 -rotate-45"
                >
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
