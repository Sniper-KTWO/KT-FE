"use client";
import styles from "./styles/chatBot.module.css";
import Image from "next/image";
import { Input, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function ChatBot() {
  return (
    <div className={styles.page}>
      <div className={styles.inputContainer}>
        <Input
          className={styles.inputField}
          clearable
          contentRight={
            <div
              className={styles.iconContainer}
              onClick={() => console.log("전송 버튼 누름")}
            >
              <Image
                src="/images/send-icon.png"
                alt="메시지 전송 버튼 아이콘"
                width={30}
                height={31}
                className={styles.sendIcon}
              />
            </div>
          }
          placeholder="요금제에 관해 궁금한 점을 물어보세요!"
        />
      </div>
    </div>
  );
}
