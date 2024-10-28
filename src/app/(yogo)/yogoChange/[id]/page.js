"use client";

import { usePlanStore } from "@/stores/planStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading/loading";
import { Image, Button, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import styles from "@/components/tab/styles/customTab.module.css";
import CompareModal from "@/components/modal/compare_modal";
import ChangeModal from "@/components/modal/change_modal";

export default function PlanDetailPage() {
  const router = useRouter();
  const plan = usePlanStore((state) => state.plan);

  useEffect(() => {
    console.log("zustand에 저장된 plan 데이터:", plan); // 상태 확인용 로그
  }, [plan]);

  if (!plan) {
    return <Loading />;
  }

  const ImageSrc = (mno) => {
    switch (mno) {
      case "SKT":
        return "/images/skt_logo.png";
      case "KT":
        return "/images/kt_logo.png";
      case "LGU":
        return "/images/lgu_logo.png";
    }
  };

  const giftImageSrc = (category) => {
    switch (category) {
      case "gift":
        return "/images/gift.png";
      case "naver":
        return "/images/naver.png";
      case "starbucks":
        return "/images/starbucks.png";
      case "cu":
        return "/images/cu.png";
    }
  };

  const yogoList = [
    { title: "요금제 이름", content: plan.name },
    { title: "데이터 제공량", content: plan.mobileDataStr },
    { title: "추가 설명", content: plan.mobileDataDescription },
    {
      title: "데이터 소진시",
      content: plan.mobileDataDateExhaustedDescription + " 속도로 무제한",
    },
    { title: "eSIM", content: plan.isEsim ? "지원 가능" : "지원 안 함" },
    {
      title: "USIM",
      content: plan.isSupportUsimOrder ? "지원 가능" : "지원 안 함",
    },
  ];

  return (
    <>
      <div className={styles.back}>
        <Button
          isIconOnly
          variant="light"
          size="sm"
          onClick={() => router.back()}
        >
          <Icon
            icon="weui:back-filled"
            width={30}
            height={30}
            color="#979797"
          />
        </Button>
      </div>

      <div className={styles.card2}>
        <div className={styles.title}>
          <Image
            src={ImageSrc(plan.mno)}
            alt={plan.mno}
            className={styles.customImage}
          />
          <p>{plan.name}</p>
        </div>

        <div className={styles.boldText}>
          <span style={{ paddingRight: "5px" }}>월</span>
          <span style={{ paddingRight: "5px" }}>{plan.mobileDataStr}</span>
          <span style={{ paddingRight: "5px" }}>+</span>
          <span>{plan.mobileDataDateExhaustedDescription}</span>
        </div>

        <div className={styles.info}>
          <span style={{ paddingRight: "5px" }}>
            <Icon icon="si:phone-fill" width={15} />
          </span>
          <span style={{ paddingRight: "10px" }}>
            {plan.mobileMessage === 9999 ? "무제한" : plan.mobileMessage}
          </span>
          <span style={{ paddingRight: "5px" }}>
            <Icon icon="lets-icons:message-fill" width={15} />
          </span>
          <span style={{ paddingRight: "10px" }}>
            {plan.mobileVoice === 9999 ? "무제한" : plan.mobileVoice}
          </span>
          <span style={{ paddingRight: "5px" }}>
            <Icon icon="fluent:cellular-data-1-20-filled" width={15} />
          </span>
          <span>{plan.net}</span>
        </div>

        <div className={styles.group}>
          <span style={{ color: "#01A69F" }} className={styles.boldText}>
            <span style={{ paddingRight: "5px" }}>월</span>
            {plan.feeString}원
          </span>

          <div className={styles.buttons}>
            <CompareModal className={styles.compareButton2} data={plan} />
            <ChangeModal className={styles.selectButton2} />
          </div>
        </div>
      </div>

      <div className={styles.card3}>
        <p className={styles.boldText2}>요금제 상세정보</p>
        {yogoList.map((item, idx) => (
          <div key={idx} className={styles.info2}>
            <div className={styles.info3}>
              <p className={styles.infoTitle}>{item.title}</p>
              <p className={styles.infoContent}>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider />

      <div className={styles.card3}>
        <p className={styles.boldText2}>요금제 혜택</p>
        {plan.giftList && plan.giftList.length > 0 ? (
          <div className={styles.info2}>
            {plan.giftList.map((gift) => (
              <div className={styles.info3}>
                <Image
                  src={giftImageSrc(gift.category)}
                  alt={gift.category}
                  className={styles.giftImage2}
                  width={30}
                  height={30}
                />
                <div
                  className={styles.info2}
                  style={{ paddingLeft: "5px", color: "#666666" }}
                >
                  <p>{gift.eventTitle}</p>
                  <p>• {gift.description}</p>
                  {gift.receiptDate && <p>• 제공 시기: {gift.receiptDate}</p>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // 혜택이 없을 때
          <div style={{ marginBottom: "10px" }} className={styles.info2}>
            제공되는 혜택이 없습니다
          </div>
        )}
      </div>
    </>
  );
}
