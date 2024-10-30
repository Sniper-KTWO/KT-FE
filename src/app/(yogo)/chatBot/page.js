"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./styles/chatBot.module.css";
import { Input } from "@nextui-org/react";
import { getInitialMessage, getSecondResponse } from "@/firebase/firestore";
import ImageButton from "@/components/button/imageButton";
import Image from "next/image";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const hasLoaded = useRef(false);

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
            content: (
              <div className={styles.bubbleContainer}>
                <Image
                  src="/images/chatbot-yogo.png"
                  alt="요고 다이렉트 이미지"
                  width={218}
                  height={86}
                  className={styles.image}
                />
                <div className={styles.textbox}>
                  <h3 className={styles.title}>{initialMessageData.text1}</h3>
                  <p className={styles.text2}>{initialMessageData.text2}</p>
                  <p className={styles.text3}>{initialMessageData.text3}</p>
                  <p className={styles.text4}>{initialMessageData.text4}</p>
                  <p className={styles.text5}>{initialMessageData.text5}</p>
                  <p className={styles.text6}>{initialMessageData.text6}</p>
                  <p className={styles.text7}>{initialMessageData.text7}</p>
                  <p className={styles.text8}>{initialMessageData.text8}</p>
                </div>
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

          setChatMessages((prev) => [
            ...prev,
            {
              id: `${secondResponseData.id}-${Date.now()}-${Math.random()}`,
              sender: secondResponseData.sender,
              content: (
                <div className={styles.bubbleContainer}>
                  {" "}
                  {/* 말풍선 스타일 추가 */}
                  <div className={styles.buttonGroup}>
                    {" "}
                    {/* 버튼 그룹 스타일 추가 */}
                    {orderedButtons.map((button, index) => (
                      <button
                        key={`${button.action}-${index}`}
                        className={styles.button}
                        onClick={() => handleButtonClick(button.action)}
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
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
      setChatMessages((prev) => [
        ...prev,
        { id: `${Date.now()}-${Math.random()}`, text: message, sender: "user" },
      ]);
      setMessage("");
    }
  };

  const handleButtonClick = (action) => {
    console.log("버튼 클릭됨: ", action);
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
              {msg.content || msg.text}
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
