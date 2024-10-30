"use client";
import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import "./styles/compare_modal.css";
import { useRouter } from "next/navigation";
import { useCompareStore } from "@/stores/compareStore";
import styles from "../tab/styles/customTab.module.css";

function CompareModal({ data }) {
  const router = useRouter();
  const { plans, addPlan, removePlan } = useCompareStore();

  const handleCompareClick = () => {
    if (data !== null) {
      addPlan(data);
      showModal();
    }
  };

  const handleConfirmation = () => {
    const selectedCount = plans.filter((plan) => plan !== null).length;

    if (selectedCount === 2) {
      router.push("/yogoCompare");
    } else {
      closeModal();
    }
  };

  const handleCancel = () => {
    removePlan();
    closeModal();
  };

  const dialogRef = useRef(null);

  const showModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <div>
      <button onClick={handleCompareClick} className={styles.compareButton}>
        비교하기
      </button>

      <dialog ref={dialogRef} className={styles.dialog}>
        <Icon
          className="close"
          onClick={handleCancel}
          icon="material-symbols-light:close"
          width={20}
          height={20}
        />
        <div className="compare">
          <Icon icon="material-symbols:download" width={30} height={40} />
          <div className="alert">
            {plans.filter((plan) => plan !== null).length === 2 ? (
              <>
                비교함에 담았어요. <br /> 비교함으로 이동할게요.
              </>
            ) : (
              <>
                비교함에 담았어요. <br />
                비교할 요금제를 하나 더 담아주세요.
              </>
            )}
          </div>
          <div>
            {" "}
            {/* plans 배열에서 null이 아닌 값의 개수를 세어 표시 */}
            {plans.filter((plan) => plan !== null).length === 2
              ? "(2/2)"
              : "(1/2)"}
          </div>
          <button className="check" onClick={handleConfirmation}>
            {plans.filter((plan) => plan !== null).length === 2
              ? "비교함"
              : "확인"}
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default CompareModal;
