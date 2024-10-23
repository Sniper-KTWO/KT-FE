"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles/scrollButton.module.css";

export default function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // 현재 스크롤 위치
      if (scrollPosition > 150) {
        // 스크롤 500px 이상일 때
        setShowButton(true); // 버튼 보이기
      } else {
        setShowButton(false); // 버튼 숨기기
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // 이벤트 해제
    };
  }, []);

  return <>{showButton && <button className={styles.scrollButton}></button>}</>;
}
