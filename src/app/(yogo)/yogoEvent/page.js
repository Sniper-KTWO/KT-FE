"use client";
import styles from "./yogoEvent.module.css";
import Image from "next/image";
import { useState } from "react";

export default function YogoEvent() {
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
        src="/images/yogo_event_benefits.png"
        alt="요고 요금제 혜택 이미지"
        width={390}
        height={590}
      />
      <Image
        src="/images/yogo_event_season2_benefits.png"
        alt="요고 요금제 시즌2 혜택 이미지"
        width={390}
        height={1022.84}
      />
      <Image
        src="/images/yogo_event_data_benefits.png"
        alt="요고 요금제 데이터 혜택 이미지"
        width={390}
        height={233.48}
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
      />
      <Image
        src="/images/yogo_event_coupon.png"
        alt="요고 요금제 쿠폰팩 이미지"
        width={390}
        height={930.8}
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
