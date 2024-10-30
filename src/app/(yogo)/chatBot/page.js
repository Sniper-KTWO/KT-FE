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
  const buttonTexts = useRef([]); // 버튼 텍스트와 액션 매핑 저장

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
              <div>
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

          buttonTexts.current = orderedButtons; // 버튼 텍스트와 액션 매핑 저장

          setChatMessages((prev) => [
            ...prev,
            {
              id: `${secondResponseData.id}-${Date.now()}-${Math.random()}`,
              sender: secondResponseData.sender,
              content: (
                <div>
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
        // 인풋에 입력된 텍스트가 버튼 텍스트와 일치하는 경우
        handleButtonClick(buttonData.action, buttonData.text);
      } else {
        // 버튼 텍스트 외의 입력에 대한 기본 응답 추가
        setChatMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}-${Math.random()}`,
            sender: "user",
            content: (
              <div className={styles.bubbleContainer_user}>
                <p className={styles.userText}>{message}</p>
              </div>
            ),
          },
          {
            id: `default-response-${Date.now()}`,
            sender: "bot",
            content: (
              <div>
                <p className={styles.senderLabel}>KT 챗봇</p>
                <div className={styles.bubbleContainer3}>
                  <p className={styles.yogoPlan_content}>
                    죄송해요, 아직 준비된 답변만 제공해드릴 수 있어요. 버튼을
                    눌러보시거나 원하는 요금제 이름을 입력해 주세요.
                  </p>
                </div>
              </div>
            ),
          },
        ]);
      }

      setMessage(""); // 메시지 전송 후 인풋 초기화
    }
  };

  const handleButtonClick = async (action, buttonText) => {
    // 버튼 텍스트를 사용자 메시지로 추가
    setChatMessages((prev) => [
      ...prev,
      {
        id: `${action}-user-${Date.now()}`,
        sender: "user",
        content: (
          <div className={styles.bubbleContainer_user}>
            <p className={styles.userText}>{buttonText}</p>
          </div>
        ),
      },
    ]);

    // 챗봇 응답 추가
    const messageData = await getMessageData(action);
    if (messageData) {
      setChatMessages((prev) => [
        ...prev,
        {
          id: `${action}-${Date.now()}`,
          sender: messageData.sender,
          content: (
            <div>
              <p className={styles.senderLabel}>KT 챗봇</p>
              <div className={styles.bubbleContainer3}>
                <p className={styles.yogoPlan_title}>{messageData.title}</p>
                {/* HTML로 해석되도록 dangerouslySetInnerHTML 적용 */}
                <p
                  className={styles.yogoPlan_content}
                  dangerouslySetInnerHTML={{ __html: messageData.content }}
                ></p>
              </div>
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
