import React, { useState } from "react";
import Image from "next/image";
import styles from "../../app/(yogo)/yogoEvent/styles/yogoEvent.module.css";
import {
  frontDataValues,
  backDataValues,
  stepTitles,
  stepTextData,
  stepDetails,
  blueBoxTexts,
  stepDataAmounts,
  stepDataCosts,
} from "./dataValues1";

const UncheckedLeftData = () => {
  // 증감 슬라이더 기능
  const [step, setStep] = useState(7); // 기본값 7단계
  const maxSteps = 13; // 최대 13단계
  const minSteps = 1; // 최소 1단계
  const sliderWidth = 269; // 슬라이더 총 너비
  const stepWidth = sliderWidth / maxSteps; // 각 단계당 너비

  // 단계 증가 함수
  const handleIncrease = () => {
    if (step < maxSteps) {
      setStep(step + 1);
    }
  };

  // 단계 감소 함수
  const handleDecrease = () => {
    if (step > minSteps) {
      setStep(step - 1);
    }
  };

  // 슬라이더 단계에 따른 텍스트 변화
  const currentFrontData = frontDataValues[step - 1]; // 앞쪽 데이터 값
  const currentBackData = backDataValues[step - 1]; // 뒤쪽 데이터 값 (8단계까지만)

  const additionalDataText =
    step < 9
      ? `기본 ${currentFrontData} + 프로모션 ${currentBackData}`
      : currentFrontData; // 9단계부터는 하나의 값만 표시

  return (
    <>
      <div className={styles.firstBox_bottomPart}>
        <div className={styles.plusMinusContainer}>
          <Image
            src="/images/minus_icon.png"
            alt="마이너스 아이콘"
            width={32.24}
            height={32.24}
            onClick={handleDecrease}
          />
          {step < 9 ? (
            <>
              <p className={styles.data1}>{currentFrontData}</p>{" "}
              {/* 앞쪽 데이터 */}
              <p className={styles.data2}>{currentBackData}</p>{" "}
              {/* 뒤쪽 데이터 */}
              <Image
                src="/images/chuga-icon.png"
                alt="추가 아이콘"
                width={27.56}
                height={13.52}
                className={styles.chugaIcon}
              />
            </>
          ) : (
            <p
              className={`${styles.data1} ${
                step >= 9 ? styles.adjustedText : ""
              }`}
            >
              {currentFrontData}
            </p>
          )}
          <Image
            src="/images/plus_icon.png"
            alt="플러스 아이콘"
            width={32.24}
            height={32.24}
            onClick={handleIncrease}
          />
        </div>
        <div className={styles.sliderOuterBox}>
          <div className={styles.outerPart}>
            <Image
              src="/images/empty-slider.png"
              alt="빈 슬라이더 아이콘"
              width={292.24}
              height={46.8}
              className={styles.empty_slider}
            />
            <span
              className={styles.innerSize}
              style={{ width: `${step * stepWidth}px` }}
            >
              {/* 슬라이더 안의 배경색 너비 */}
            </span>
            <div className={styles.textboxContainer}>
              <p className={styles.textbox5}>5GB</p>
              <p className={styles.textbox6}>35GB</p>
              <p className={styles.textbox7}>무제한</p>
            </div>
            <div className={styles.blueBox}>
              <p
                className={styles.blueBoxText}
                style={{ visibility: step >= 9 ? "hidden" : "visible" }}
              >
                {blueBoxTexts[step - 1]}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.secondBox}>
        <div className={styles.secondBoxHeader}>
          <p className={styles.secondBoxHeadTitle}>
            {stepTitles[step - 1]} {/* step이 1부터 시작하므로 -1 */}
          </p>
          <div className={styles.borderContainer3}></div>
        </div>
        <div>
          <div className={styles.textbox8}>
            <p className={styles.textbox8_1}>데이터</p>
            <p className={styles.textbox8_2}>{stepDataAmounts[step - 1]}</p>
            <p className={styles.textbox8_3}>
              {stepDetails[step - 1] ? stepDetails[step - 1] : null}
            </p>
          </div>
          <div className={styles.textbox8_4}>
            {step < 9 ? (
              `* ${additionalDataText}` // 8단계까지는 기존 형식
            ) : step <= 11 ? (
              `* 기본 ${currentFrontData}` // 9단계와 10단계에서는 "기본" 추가
            ) : (
              <span style={{ visibility: "hidden" }}>placeholder</span> // 11단계와 12단계에서는 공간 유지
            )}
          </div>
          <div className={styles.textbox8}>
            <p className={styles.textbox8_1}>월정액</p>
            <p className={styles.textbox8_2}>{stepDataCosts[step - 1]}</p>
          </div>
        </div>
        <div className={styles.borderContainer4}></div>
        <div className={styles.textbox9_container}>
          <div className={styles.textbox9}>
            <Image
              src="/images/call-message-icon.png"
              width={24.44}
              height={25}
            />
            <p className={styles.textbox9_1}>
              {stepTextData[step - 1].callMessage}
            </p>
          </div>
          <div className={styles.textbox9}>
            <Image src="/images/gift-icon.png" width={24.44} height={25} />
            <p className={styles.textbox9_1}>
              {stepTextData[step - 1].giftMessage}
            </p>
          </div>
          <div className={styles.textbox9}>
            <Image
              src="/images/membership-icon.png"
              width={24.44}
              height={25}
            />
            <p className={styles.textbox9_1}>
              {stepTextData[step - 1].membershipMessage}
            </p>
          </div>
          <div className={styles.textbox9}>
            <Image src="/images/coupon-icon.png" width={24.44} height={25} />
            <p className={styles.textbox9_1}>
              {stepTextData[step - 1].couponMessage}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UncheckedLeftData;
