"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./styles/chatBot.module.css";
import { Input } from "@nextui-org/react";
import {
  getInitialMessage,
  getSecondResponse,
  getMessageData,
} from "@/firebase/firestore";
import ImageButton from "@/components/button/imageButton";
import Image from "next/image";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const hasLoaded = useRef(false);
  const buttonTexts = useRef([]);

  const formatDate = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "오후" : "오전";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${ampm} ${formattedHours}:${formattedMinutes}`;
  };

  useEffect(() => {
    if (hasLoaded.current) return;
    hasLoaded.current = true;

    const loadInitialMessages = async () => {
      const initialMessageData = await getInitialMessage();
      if (initialMessageData) {
        setChatMessages([
          {
            id: `${initialMessageData.id}-${Date.now()}-${Math.random()}`,
            sender: initialMessageData.sender,
            time: formatDate(new Date()),
            content: (
              <div className={styles.bubbleContainer_bot}>
                <div className={styles.botTextBox}>
                  <p className={styles.senderLabel}>KT 챗봇</p>
                  <div className={styles.bubbleContainer1}>
                    <Image
                      src="/images/chatbot-yogo.png"
                      alt="요고 다이렉트 이미지"
                      width={218}
                      height={86}
                      className={styles.image}
                    />
                    <div className={styles.textbox}>
                      <p className={styles.title}>{initialMessageData.text1}</p>
                      <p className={styles.text2}>{initialMessageData.text2}</p>
                      <p className={styles.text3}>{initialMessageData.text3}</p>
                      <p className={styles.text4}>{initialMessageData.text4}</p>
                      <p className={styles.text5}>{initialMessageData.text5}</p>
                      <p className={styles.text6}>{initialMessageData.text6}</p>
                      <p className={styles.text7}>{initialMessageData.text7}</p>
                      <p className={styles.text8}>{initialMessageData.text8}</p>
                    </div>
                  </div>
                </div>
                <p className={styles.timeStampBot}>{formatDate(new Date())}</p>
              </div>
            ),
          },
        ]);

        const secondResponseData = await getSecondResponse();
        if (secondResponseData && secondResponseData.buttons) {
          const orderedButtons = [
            "요고 69",
            "요고 61",
            "요고 55",
            "요고 49",
            "요고 46",
            "요고 44",
            "요고 42",
            "요고 40",
            "요고 38",
            "요고 36",
            "요고 34",
            "요고 32",
            "요고 30",
          ].map((text) =>
            secondResponseData.buttons.find((button) => button.text === text)
          );

          buttonTexts.current = orderedButtons;

          setChatMessages((prev) => [
            ...prev,
            {
              id: `${secondResponseData.id}-${Date.now()}-${Math.random()}`,
              sender: secondResponseData.sender,
              time: formatDate(new Date()),
              content: (
                <div className={styles.bubbleContainer_bot}>
                  <div className={styles.botTextBox}>
                    <div className={styles.bubbleContainer2}>
                      <div className={styles.buttonGroup}>
                        {orderedButtons.map((button, index) => (
                          <button
                            key={`${button.action}-${index}`}
                            className={styles.button}
                            onClick={() =>
                              handleButtonClick(button.action, button.text)
                            }
                          >
                            {button.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className={styles.timeStampBot}>
                    {formatDate(new Date())}
                  </p>
                </div>
              ),
            },
          ]);
        }
      }
    };

    loadInitialMessages();
  }, []);

  const handleSendMessage = async () => {
    if (message.trim()) {
      const buttonData = buttonTexts.current.find(
        (btn) => btn.text === message.trim()
      );

      if (buttonData) {
        handleButtonClick(buttonData.action, buttonData.text);
      } else {
        setChatMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}-${Math.random()}`,
            sender: "user",
            time: formatDate(new Date()),
            content: (
              <div className={styles.bubbleContainer_user}>
                <p className={styles.timeStampUser}>{formatDate(new Date())}</p>
                <p className={styles.userText}>{message}</p>
              </div>
            ),
          },
          {
            id: `default-response-${Date.now()}`,
            sender: "bot",
            time: formatDate(new Date()),
            content: (
              <div className={styles.bubbleContainer_bot}>
                <div className={styles.botTextBox}>
                  <p className={styles.senderLabel}>KT 챗봇</p>
                  <div className={styles.bubbleContainer3}>
                    <p className={styles.yogoPlan_content}>
                      죄송해요, 아직 준비된 답변만 제공해드릴 수 있어요. 버튼을
                      눌러보시거나 원하는 요금제 이름을 입력해 주세요.
                    </p>
                  </div>
                </div>
                <p className={styles.timeStampBot}>{formatDate(new Date())}</p>
              </div>
            ),
          },
        ]);
      }

      setMessage("");
    }
  };

  const handleButtonClick = async (action, buttonText) => {
    setChatMessages((prev) => [
      ...prev,
      {
        id: `${action}-user-${Date.now()}`,
        sender: "user",
        time: formatDate(new Date()),
        content: (
          <div className={styles.bubbleContainer_user}>
            <p className={styles.timeStampUser}>{formatDate(new Date())}</p>
            <p className={styles.userText}>{buttonText}</p>
          </div>
        ),
      },
    ]);

    const messageData = await getMessageData(action);
    if (messageData) {
      setChatMessages((prev) => [
        ...prev,
        {
          id: `${action}-${Date.now()}`,
          sender: messageData.sender,
          time: formatDate(new Date()),
          content: (
            <div className={styles.bubbleContainer_bot}>
              <div className={styles.botTextBox}>
                <p className={styles.senderLabel}>KT 챗봇</p>
                <div className={styles.bubbleContainer3}>
                  <p className={styles.yogoPlan_title}>{messageData.title}</p>
                  <p
                    className={styles.yogoPlan_content}
                    dangerouslySetInnerHTML={{ __html: messageData.content }}
                  ></p>
                </div>
              </div>
              <p className={styles.timeStampBot}>{formatDate(new Date())}</p>
            </div>
          ),
        },
      ]);
    }
  };


  return (
    <div className={styles.page}>

      <div className={styles.chatContainer}>
        <ul className={styles.chatList}>
          {chatMessages.map((msg) => (
            <li
              key={msg.id}
              className={
                msg.sender === "bot" ? styles.botMessage : styles.userMessage
              }
            >
              {msg.content}
            </li>
          ))}
        </ul>
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <Input
              className={styles.inputField}
              clearable
              placeholder="요금제에 관해 궁금한 점을 물어보세요!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            <ImageButton
              src="/images/send-icon.png"
              alt="메시지 전송 버튼 아이콘"
              onClick={handleSendMessage}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
