"use client";
import React from "react";
import BrandSlide from "../../../components/slider/brand_slider";
import styles from "./styles/yogoBrand.module.css";
import ScrollButton from "../../../components/scrollButton/scrollButton";

export default function yogoBrand() {
  return (
    <>
      <div className="homeStyle">
        <BrandSlide />
      </div>
      <div className={styles.yogoBrand_video}>
        <div className={styles.videoContainer1}>
          <iframe
            width="256.88"
            height="393.38"
            src="https://www.youtube.com/embed/EEKovGsbLWg?start=5"
            title="YouTube video player1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video1}
          ></iframe>
        </div>
        <div className={styles.videoContainer2}>
          <iframe
            width="170.56"
            height="320.17"
            src="https://www.youtube.com/embed/RStVl4lilxM"
            title="YouTube video player2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video2}
          ></iframe>
          <iframe
            width="170.56"
            height="320.17"
            src="https://www.youtube.com/embed/bxFI64dzg1E"
            title="YouTube video player3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video3}
          ></iframe>
        </div>
      </div>
      <ScrollButton /> {/* 스크롤 버튼 표시 */}
    </>
  );
}
