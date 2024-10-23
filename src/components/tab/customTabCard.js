import {
  Card,
  CardBody,
  Image,
  Button,
  Divider,
  Accordion,
  AccordionItem,
  Tooltip,
} from "@nextui-org/react";
import styles from "@/components/tab/styles/customTab.module.css";
import { Icon } from "@iconify/react";

export default function CustomTabCard({ data }) {
  // 이동통신사에 따라 로고 이미지를 다르게 설정
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

  return (
    <>
      {data.planMetas.map((plan, idx) => (
        <Card key={idx} className={styles.card}>
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

              <div className={styles.boldText}>
                <p style={{ paddingRight: "5px" }}>월</p>
                <p style={{ paddingRight: "5px" }}>{plan.mobileDataStr}</p>
                <p style={{ paddingRight: "5px" }}>+</p>
                <p>{plan.mobileDataDateExhaustedDescription}</p>
              </div>

              <div className={styles.info}>
                <p style={{ paddingRight: "5px" }}>통화</p>
                <p style={{ paddingRight: "10px" }}>
                  {plan.mobileMessage === 9999 ? "무제한" : plan.mobileMessage}
                </p>
                <p style={{ paddingRight: "10px" }}>|</p>
                <p style={{ paddingRight: "5px" }}>문자</p>
                <p style={{ paddingRight: "10px" }}>
                  {plan.mobileVoice === 9999 ? "무제한" : plan.mobileVoice}
                </p>
                <p style={{ paddingRight: "10px" }}>|</p>
                <p>{plan.net}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <p style={{ color: "#01A69F" }} className={styles.boldText}>
                  <p style={{ paddingRight: "5px" }}>월</p>
                  {plan.feeString}원
                </p>

                <Button className={styles.compareButton}>비교하기</Button>
                <Button className={styles.selectButton}>변경하기</Button>
              </div>

              <Divider />

              {plan.giftList && plan.giftList.length > 0 ? (
                // 혜택이 있을 때
                <Accordion>
                  <AccordionItem
                    startContent={
                      <div className={styles.giftImage}>
                        {plan.giftList.map((gift) => (
                          <Image
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
                      <div className={styles.giftList}>
                        <p>혜택 {giftIdx + 1}.</p>
                        <p>{gift.eventTitle}</p>

                        <p>상세 설명: {gift.description}</p>

                        {gift.receiptDate && (
                          <p>(제공 시기: {gift.receiptDate})</p>
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
