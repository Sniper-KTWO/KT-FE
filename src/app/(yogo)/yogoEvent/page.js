"use client";
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import styles from "./styles/yogoEvent.module.css";
import Image from "next/image";
import { useState } from "react";
import {
  frontDataValues,
  backDataValues,
  stepTitles,
  stepTextData,
  stepDetails,
  blueBoxTexts,
  stepDataAmounts,
  stepDataCosts,
} from "./dataValues";

export default function YogoEvent() {
  //증감 슬라이더_체크박스 기능
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  //증감 슬라이더 기능
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

  //tab 기능
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  //footer 드롭다운 기능
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div className={styles.container}>
      <Image
        src="/images/2-1.png"
        alt="2-1 이미지"
        width={390}
        height={457.08}
      ></Image>
      <Image
        src="/images/2-2.png"
        alt="2-2 이미지"
        width={390}
        height={95.68}
        className={styles.image2_2}
      ></Image>
      <div className={styles.sliderBarPart}>
        {/*슬라이더바 들어갈 위치*/}
        <div className={styles.firstBox}>
          <p className={styles.textbox1}>Y에겐 데이터가 2배!</p>
          <div className={styles.checkbox}>
            <p className={styles.textbox2}> 34세 이하의 Y라면? Y덤 혜택받기!</p>
            <div onClick={handleToggle} style={{ cursor: "pointer" }}>
              {isToggled ? (
                <img
                  src="/images/checked-icon.png"
                  alt="체크된 이미지"
                  width="16.64"
                  height="16.64"
                />
              ) : (
                <img
                  src="/images/unchecked-icon.png"
                  alt="체크되지 않은 이미지"
                  width="16.64"
                  height="16.64"
                />
              )}
            </div>
          </div>
          <div className={styles.borderContainer}></div>
          <div className={styles.switchContainer}>
            <p className={styles.textbox3}>데이터 용량</p>
            <div className={styles.switchTab} onClick={toggleSwitch}>
              <div className={`${styles.switch} ${isOn ? styles.on : ""}`}>
                <div className={styles.switchThumb}></div>
              </div>
            </div>
            <p className={styles.textbox4}>월정액</p>
          </div>
          <div className={styles.borderContainer2}></div>
          <div className={styles.firstBox_bottomPart}>
            <div className={styles.plusMinusContainer}>
              <Image
                src="/images/minus_icon.png"
                alt="마이너스 아이콘"
                width={32.24}
                height={32.24}
                onClick={handleDecrease}
              ></Image>
              {step < 9 ? (
                <>
                  <p className={styles.data1}>{currentFrontData}+</p>{" "}
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
              ></Image>
            </div>
            <div className={styles.sliderOuterBox}>
              <div className={styles.outerPart}>
                <Image
                  src="/images/empty-slider.png"
                  alt="빈 슬라이더 아이콘"
                  width={292.24}
                  height={46.8}
                  className={styles.empty_slider}
                ></Image>
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
              <p className={styles.textbox8_2}>
                {stepDataAmounts[step - 1]} {/* 단계에 맞는 데이터 */}
              </p>
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
              <p className={styles.textbox8_2}>
                {stepDataCosts[step - 1]} {/* 단계에 맞는 데이터 */}
              </p>
            </div>
          </div>
          <div className={styles.borderContainer4}></div>
          <div className={styles.textbox9_container}>
            <div className={styles.textbox9}>
              <Image
                src="/images/call-message-icon.png"
                width={24.44}
                height={25}
              ></Image>
              <p className={styles.textbox9_1}>
                {stepTextData[step - 1].callMessage}
              </p>
            </div>
            <div className={styles.textbox9}>
              <Image
                src="/images/gift-icon.png"
                width={24.44}
                height={25}
              ></Image>
              <p className={styles.textbox9_1}>
                {stepTextData[step - 1].giftMessage}
              </p>
            </div>
            <div className={styles.textbox9}>
              <Image
                src="/images/membership-icon.png"
                width={24.44}
                height={25}
              ></Image>
              <p className={styles.textbox9_1}>
                {stepTextData[step - 1].membershipMessage}
              </p>
            </div>
            <div className={styles.textbox9}>
              <Image
                src="/images/coupon-icon.png"
                width={24.44}
                height={25}
              ></Image>
              <p className={styles.textbox9_1}>
                {stepTextData[step - 1].couponMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/2-4.png"
        alt="2-4 이미지"
        width={390}
        height={116.48}
        className={styles.image2_4}
      ></Image>
      <Image
        src="/images/2-5.png"
        alt="2-5 이미지"
        width={390}
        height={292.24}
        className={styles.image2_5}
      ></Image>
      <div className={styles.yogoEvent_video}>
        <div className={styles.videoContainer1}>
          <iframe
            width="170.56"
            height="304.72"
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
            height="304.72"
            src="https://www.youtube.com/embed/RStVl4lilxM"
            title="YouTube video player2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video2}
          ></iframe>
          <iframe
            width="170.56"
            height="304.72"
            src="https://www.youtube.com/embed/bxFI64dzg1E"
            title="YouTube video player3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video3}
          ></iframe>
        </div>
      </div>
      <Image
        src="/images/2-7.png"
        alt="2-7 이미지"
        width={390}
        height={728}
      ></Image>
      <div className={styles.yogoEvent_benefits}>
        <Image
          src="/images/yogo_event_benefits.png"
          alt="요고 요금제 혜택 이미지"
          width={390}
          height={590}
        />
        <a
          href="#target-div1"
          style={{
            position: "absolute",
            top: "3714px",
            left: "calc(50% - 160px)",
            width: "139px",
            height: "156px",
            cursor: "pointer",
          }}
        >
          {/*클릭하여 이동*/}
        </a>
        <a
          href="#target-div2"
          style={{
            position: "absolute",
            top: "3714px",
            left: "calc(50% + 10px)",
            width: "139px",
            height: "156px",
            cursor: "pointer",
          }}
        >
          {/*클릭하여 이동*/}
        </a>
        <a
          href="#target-div3"
          style={{
            position: "absolute",
            top: "3921px",
            left: "calc(50% - 160px)",
            width: "139px",
            height: "156px",
            cursor: "pointer",
          }}
        >
          {/*클릭하여 이동*/}
        </a>
        <a
          href="#target-div4"
          style={{
            position: "absolute",
            top: "3921px",
            left: "calc(50% + 10px)",
            width: "139px",
            height: "156px",
            cursor: "pointer",
          }}
        >
          {/*클릭하여 이동*/}
        </a>
      </div>
      <Image
        src="/images/yogo_event_season2_benefits.png"
        alt="요고 요금제 시즌2 혜택 이미지"
        width={390}
        height={1022.84}
        id="target-div1"
      />
      <Image
        src="/images/yogo_event_data_benefits.png"
        alt="요고 요금제 데이터 혜택 이미지"
        width={390}
        height={233.48}
        id="target-div2"
      />
      <div className={styles.mintContainer}>
        <Image
          src="/images/yogo_event_dataTable.png"
          alt="요고 요금제 데이터 표"
          width={390}
          height={408.57}
          className={styles.dataTable}
        />
      </div>
      <Image
        src="/images/yogo_event_membershipPromotion.png"
        alt="요고 요금제 멤버십 혜택 이미지"
        width={390}
        height={814.84}
        id="target-div3"
      />
      <Image
        src="/images/yogo_event_coupon.png"
        alt="요고 요금제 쿠폰팩 이미지"
        width={390}
        height={930.8}
        id="target-div4"
      />
      <Image
        src="/images/yogo_event_compare.png"
        alt="요고 요금제 알뜰폰 비교 이미지"
        width={390}
        height={673.92}
      />
      <Image
        src="/images/yogo_event_yogomungchi.png"
        alt="요고 요금제 요고뭉치 이미지"
        width={390}
        height={500.24}
      />
      <Image
        src="/images/yogo_event_bottomBanner.png"
        alt="요고 요금제 시즌2 하단 배너 이미지"
        width={390}
        height={145.6}
      />
      <div className={styles.bottomContainer}>
        <Image
          src="/images/yogo_event_exclamationMark.png"
          alt="요고 요금제 하단 느낌표 아이콘"
          width={19}
          height={19}
        />
        <span className={styles.mustCheckText}>꼭 확인하세요.</span>
      </div>
      <div className={styles.dropdownContainer}>
        {/* 드롭다운 버튼과 내용 */}
        <button onClick={toggleDropdown1} className={styles.dropdownButton1}>
          {isOpen1 ? "※ 요고 요금제 유의사항" : "※ 요고 요금제 유의사항"}
          <Image
            src={
              isOpen1
                ? "/images/yogo_event_hide_icon.png"
                : "/images/yogo_event_show_icon.png"
            }
            alt={
              isOpen1
                ? "요고 요금제 드롭다운 숨기기"
                : "요고 요금제 드롭다운 보이기"
            }
            width={16.52}
            height={10.73}
          />
        </button>

        {/* 드롭다운 내용 */}
        {isOpen1 && (
          <ul className={styles.dropdownOne}>
            <li>KT닷컴에서만 가입 가능한 온라인 전용 요금제입니다.</li>
            <li>
              본 요금제는 약정이 없는 요금제로 약정 혜택(단말할인 지원금,
              선택약정할인(요금 25% 할인))을 받을 수 없습니다.
            </li>
            <li>
              약정이 만료된 고객님만 요고 요금제 가입이 가능합니다. 기존 약정이
              있으신 경우 요고 요금제 가입을 위해 기존 약정이 해지되며 잔여
              위약금은 청구됩니다.
            </li>
          </ul>
        )}
      </div>
      <div className={styles.dropdownContainer}>
        {/* 드롭다운 버튼과 내용 */}
        <button onClick={toggleDropdown2} className={styles.dropdownButton2}>
          {isOpen2
            ? "※ 스타벅스 커피 이벤트 유의사항"
            : "※ 스타벅스 커피 이벤트 유의사항"}
          <Image
            src={
              isOpen2
                ? "/images/yogo_event_hide_icon.png"
                : "/images/yogo_event_show_icon.png"
            }
            alt={
              isOpen2
                ? "요고 요금제 드롭다운 숨기기"
                : "요고 요금제 드롭다운 보이기"
            }
            width={16.52}
            height={10.73}
          />
        </button>

        {/* 드롭다운 내용 */}
        {isOpen2 && (
          <ul className={styles.dropdownOne}>
            <li>
              KT닷컴에서 8월 24일부터 요고 요금제로 개통한 고객님 대상 (핸드폰
              개통 또는 유심단독 개통 포함) 이며, 다른 요금제에서 요고 요금제로
              변경한 고객은 제외입니다. (5월1일 ~ 8월 23일은 5G 요고 요금제 중
              요고 37,000원 이상 개통한 고객 대상)
            </li>
            <li>
              스타벅스 쿠폰 발송일은개통 완료 후 “최초” 쿠폰팩 발송부터 최대
              24개월까지 매월 스타벅스 이용권 추가 증정
            </li>
            <li>
              기본적으로 선택하는 쿠폰팩 외에 추가로 증정하는 이벤트입니다.
            </li>
            <li>
              해당 스타벅스 제공 이벤트는 요고 요금제로 개통하고 유지 시 최대
              24개월 제공되며, 다른 요금제로 변경 시 스타벅스 이용권 제공은
              불가합니다.
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
// 요금 가입 혜택
