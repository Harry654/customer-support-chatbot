"use client";

import Image from "next/image";
import React, { useState } from "react";
import ChatModal from "./ChatModal";
import Chat from "./Chat";

function ChatBot() {
  const [modalState, setModalState] = useState<boolean>(false);

  const handleOpenModal: Function = (newState: boolean): void =>
    setModalState(newState);

  return (
    <>
      <ChatModal isOpen={modalState} handleClose={() => handleOpenModal(false)}>
        <Chat />
      </ChatModal>
      <div
        className="bottom-10 right-10 rounded-full w-16 h-16 bg-[#FF6426] fixed z-10 flex justify-center items-center cursor-pointer"
        onClick={() => handleOpenModal(!modalState)}
      >
        {!modalState ? (
          <Image src="/images/chat.svg" width={30} height={30} alt="chat" />
        ) : (
          <Image src="/images/close.svg" width={30} height={30} alt="close" />
        )}
      </div>
    </>
  );
}

export default ChatBot;
