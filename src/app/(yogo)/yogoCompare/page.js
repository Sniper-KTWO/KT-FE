"use client";

import { useCompareStore } from "@/stores/compareStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, Divider, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import styles from "@/app/(yogo)/yogoCompare/styles/yogoCompare.module.css";
import ChangeModal from "@/components/modal/change_modal";
import Loading from "@/components/loading/loading";

export default function yogoCompare() {
  const router = useRouter();
  const { plans, resetPlans } = useCompareStore();

  useEffect(() => {
    console.log("비교함에 담긴 데이터:", plans);
  }, [plans]);

  const handleBackClick = () => {
    router.back();
    resetPlans();
  };

  if (plans === null) {
    return <Loading />;
  }

  return (
    <div className={styles.page}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button isIconOnly variant="light" size="sm" onClick={handleBackClick}>
          <Icon
            icon="weui:back-filled"
            width={30}
            height={30}
            color="#979797"
          />
        </Button>
        <p className={styles.title}>요금제를 비교해보세요</p>
      </div>
      <div className={styles.card_page}>
        {plans.map((plan, idx) =>
          plan ? ( // plan이 null이 아닐 때만 렌더링
            <div
              key={plan.id || `plan-${idx}`}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Card className={styles.card1}>
                <CardBody>
                  <p className={styles.card_title}>선택한 요금제 {idx + 1}</p>
                  <p className={styles.card_name}>{plan.name}</p>
                </CardBody>
              </Card>

              <Card className={styles.card2}>
                <CardBody>
                  {[
                    { title: "월정액", content: plan.feeString },
                    { title: "데이터", content: plan.mobileDataStr || 0 },
                    { title: "통신사", content: plan.mno },
                    {
                      title: "전화",
                      content:
                        plan.mobileVoice === 9999
                          ? "무제한"
                          : plan.mobileVoice + "분",
                    },
                    {
                      title: "문자",
                      content:
                        plan.mobileMessage === 9999
                          ? "무제한"
                          : plan.mobileMessage + "건",
                    },
                    { title: "네트워크망", content: plan.net },
                  ].map((detail, index) => (
                    <div key={`${plan.id || idx}-${index}`}>
                      <p className={styles.card2_title}>{detail.title}</p>
                      <p className={styles.card2_content}>{detail.content}</p>
                      <Divider />
                    </div>
                  ))}
                  <p className={styles.card2_title}>혜택</p>
                  {plan.giftList && plan.giftList.length > 0 ? (
                    <div>
                      {plan.giftList.map((gift, num) => (
                        <div
                          className={styles.card2_content}
                          key={plan.id || idx}
                        >
                          <p>혜택 {num + 1}.</p>
                          <p>{gift.eventTitle}</p>
                          <p>• {gift.description}</p>
                          {gift.receiptDate && (
                            <p style={{ marginBottom: "5px" }}>
                              • 제공 시기: {gift.receiptDate}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    // 혜택이 없을 때
                    <div className={styles.card2_content}>
                      제공되는 혜택이 없습니다
                    </div>
                  )}
                </CardBody>
              </Card>

              <div style={{ marginLeft: "50px" }}>
                <ChangeModal />
              </div>
            </div>
          ) : (
            // plan이 null일 경우 대체 콘텐츠 렌더링
            <Card className={styles.card1} key={idx}>
              <CardBody>
                <p className={styles.card_name}>
                  요금제가 선택되지 않았습니다.
                </p>
              </CardBody>
            </Card>
          )
        )}
      </div>
    </div>
  );
}
