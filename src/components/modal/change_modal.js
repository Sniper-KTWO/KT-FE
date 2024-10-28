"use client";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import "./styles/change_modal.css";
import styles from "../tab/styles/customTab.module.css";

function ChangeModal() {
  const dialogRef = useRef(null);

  const showModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <div>
      <button onClick={showModal} className={styles.selectButton}>
        변경하기
      </button>

      <dialog ref={dialogRef}>
        <Icon
          className="close"
          onClick={closeModal}
          icon="material-symbols-light:close"
          width={20}
          height={20}
        />
        <div className="change">
          <Icon icon="la:check-circle" width={30} height={40} />
          <div className="alert">요금제가 변경되었습니다.</div>
          <button className="check" onClick={closeModal}>
            확인
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default ChangeModal;
