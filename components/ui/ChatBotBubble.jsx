"use client";

import Image from "next/image";
import ChatBot from "./ChatBot";
import { useState } from "react";

const ChatBotBubble = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const close = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5">
      <div
        onClick={() => {
          setIsChatOpen(!isChatOpen);
        }}
        className={`${
          !isChatOpen ? "block" : "hidden"
        } rounded-md hover:scale-110 transition cursor-pointer p-5 bg-white shadow-lg border-2 border-black`}
      >
        <Image
          alt="404 Not Found"
          src={"/assets/logo_small.svg"}
          className="w-full"
          width={43}
          height={21}
        />
      </div>
      <div className={`${isChatOpen ? "block" : "hidden"}`}>
        <ChatBot close={close} />
      </div>
    </div>
  );
};

export default ChatBotBubble;
