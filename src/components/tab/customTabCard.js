"use client";

import {
  Card,
  CardBody,
  Image,
  Button,
  Divider,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import styles from "@/components/tab/styles/customTab.module.css";
import { usePlanStore } from "@/stores/planStore";

export default function CustomTabCard({ data }) {
  const router = useRouter();
  const setPlan = usePlanStore((state) => state.setPlan);

  // 상세 페이지로 데이터 전달
  const handleNavigation = (plan, idx) => {
    // Zustand를 통해 plan 데이터 설정
    setPlan(plan);

    // 상세 페이지로 이동
    router.push(`/yogoChange/${idx}`);
  };

  const ImageSrc = (mno) => {
    switch (mno) {
      case "SKT":
        return "/images/skt_logo.png";
      case "KT":
        return "/images/kt_logo.png";
      case "LGU":
        return "/images/lgu_logo.png";
      default:
        return "/images/phone_default.png";
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
      default:
        return "/images/gift.png";
    }
  };

  return (
    <>
      {data.planMetas.map((plan, idx) => (
        <Card className={styles.card} key={plan.id || idx}>
          <CardBody>
            <div>
              <div className={styles.title}>
                <Image
                  src={ImageSrc(plan.mno)}
                  alt={plan.mno}
                  className={styles.customImage}
                />
                <p>{plan.name}</p>
              </div>

              <div
                onClick={() => handleNavigation(plan, idx)}
                style={{ cursor: "pointer" }}
              >
                <div className={styles.boldText}>
                  <span style={{ paddingRight: "5px" }}>월</span>
                  <span style={{ paddingRight: "5px" }}>
                    {plan.mobileDataStr === null ? "0GB" : plan.mobileDataStr}
                  </span>
                  <span>
                    {plan.mobileDataDateExhaustedDescription
                      ? `+${plan.mobileDataDateExhaustedDescription}`
                      : plan.mobileDataDateExhaustedDescription}
                  </span>
                </div>

                <div className={styles.info}>
                  <span style={{ paddingRight: "5px" }}>통화</span>
                  <span style={{ paddingRight: "10px" }}>
                    {plan.mobileMessage === 9999
                      ? "무제한"
                      : plan.mobileMessage}
                  </span>
                  <span style={{ paddingRight: "10px" }}>|</span>
                  <p style={{ paddingRight: "5px" }}>문자</p>
                  <span style={{ paddingRight: "10px" }}>
                    {plan.mobileVoice === 9999 ? "무제한" : plan.mobileVoice}
                  </span>
                  <span style={{ paddingRight: "10px" }}>|</span>
                  <span>{plan.net}</span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <span style={{ color: "#01A69F" }} className={styles.boldText}>
                  <span style={{ paddingRight: "5px" }}>월</span>
                  {plan.feeString}원
                </span>

                <Button className={styles.compareButton}>비교하기</Button>
                <Button className={styles.selectButton}>변경하기</Button>
              </div>

              <Divider />

              {plan.giftList && plan.giftList.length > 0 ? (
                // 혜택이 있을 때
                <Accordion>
                  <AccordionItem
                    textValue="혜택 보기"
                    startContent={
                      <div className={styles.giftImage}>
                        {plan.giftList.map((gift, giftIdx) => (
                          <Image
                            key={gift.id || giftIdx}
                            src={giftImageSrc(gift.category)}
                            alt={gift.category}
                            className={styles.giftImage}
                            width={30}
                            height={30}
                          />
                        ))}
                      </div>
                    }
                  >
                    {plan.giftList.map((gift, giftIdx) => (
                      <div className={styles.giftList} key={gift.id || giftIdx}>
                        <span>혜택 {giftIdx + 1}.</span>
                        <span>{gift.eventTitle}</span>

                        <span>상세 설명: {gift.description}</span>

                        {gift.receiptDate && (
                          <span>(제공 시기: {gift.receiptDate})</span>
                        )}
                      </div>
                    ))}
                  </AccordionItem>
                </Accordion>
              ) : (
                // 혜택이 없을 때
                <div style={{ marginTop: "10px" }} className={styles.title}>
                  제공되는 혜택이 없습니다
                </div>
              )}
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
