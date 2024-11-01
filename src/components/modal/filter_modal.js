"use client";
import React, { useState, useRef } from "react";
import "./styles/filter_modal.css";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import PriceSlider from "../slider/price_slider";
import styles from "../dropdown/styles/menu.module.css";
import { Icon } from "@iconify/react";

function FilterModal({ onSearchChange }) {
  const dialogRef = useRef(null);
  const [isKTActive, setIsKTActive] = useState(false);
  const [isSKTActive, setIsSKTActive] = useState(false);
  const [isLGActive, setIsLGActive] = useState(false);
  const [minFee, setMinFee] = useState(0);
  const [maxFee, setMaxFee] = useState(70000);
  const [selectedNetWorks, setSelectedNetWorks] = useState([]);

  const handleKTClick = () => {
    setIsKTActive((prevState) => !prevState);
    setSelectedNetWorks((prev) =>
      prev.includes("KT") ? prev.filter((net) => net !== "KT") : [...prev, "KT"]
    );
  };

  const handleSKTClick = () => {
    setIsSKTActive((prevState) => !prevState);
    setSelectedNetWorks((prev) =>
      prev.includes("SKT")
        ? prev.filter((net) => net !== "SKT")
        : [...prev, "SKT"]
    );
  };

  const handleLGClick = () => {
    setIsLGActive((prevState) => !prevState);
    setSelectedNetWorks((prev) =>
      prev.includes("LGU")
        ? prev.filter((net) => net !== "LGU")
        : [...prev, "LGU"]
    );
  };

  const showModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    setIsKTActive(false);
    setIsSKTActive(false);
    setIsLGActive(false);
    setMinFee(0);
    setMaxFee(70000);
    setSelectedNetWorks([]);
    dialogRef.current?.close();
  };

  const handleConfirm = () => {
    if (onSearchChange) {
      onSearchChange({
        minFee,
        maxFee,
        network: selectedNetWorks,
      });
    }
    console.log("min:", minFee);
    console.log("max:", maxFee);
    console.log("network:", selectedNetWorks);
    dialogRef.current?.close();
  };

  return (
    <div style={{ height: "auto" }}>
      <Button auto light className={styles.filter} onClick={showModal}>
        <Icon icon="rivet-icons:filter" className={styles.filterIcon} />
        필터
      </Button>

      <>
        <dialog ref={dialogRef}>
          <div className="question">어떤 요금제를 찾으시나요?</div>
          <Divider className="divide" />
          <PriceSlider
            aria-label="Price Slider"
            onChange={(min, max) => {
              setMinFee(min);
              setMaxFee(max);
            }}
          />

          <div className="tel">통신사</div>
          <div className="logos">
            <button
              aria-label="Network Selection Button1"
              className="logo"
              onClick={handleKTClick}
              style={{
                backgroundColor: !isKTActive ? "#f5f5f5" : "#86e8d1",
              }}
            >
              <Image
                className="logoImg"
                src={"/images/kt_logo.png"}
                alt="kt"
                width={15}
                height={15}
              />
              <span style={{ marginLeft: "-45px" }}>KT</span>
            </button>
            <button
              aria-label="Network Selection Button2"
              className="logo"
              onClick={handleSKTClick}
              style={{
                backgroundColor: !isSKTActive ? "#f5f5f5" : "#86e8d1",
              }}
            >
              <Image
                className="logoImg"
                src={"/images/skt_logo.png"}
                alt="skt"
                width={17}
                height={17}
              />
              <span style={{ marginLeft: "-45px" }}>SKT</span>
            </button>
            <button
              aria-label="Network Selection Button3"
              className="logo"
              onClick={handleLGClick}
              style={{
                backgroundColor: !isLGActive ? "#f5f5f5" : "#86e8d1",
              }}
            >
              <Image
                className="logoImg"
                src={"/images/lgu_logo.png"}
                alt="LG"
                width={17}
                height={17}
              />
              <span style={{ marginLeft: "-45px" }}>LG</span>
            </button>
          </div>
          <div className="buttons">
            <button className="cancel" onClick={closeModal}>
              취소
            </button>
            <button className="ok" onClick={handleConfirm}>
              완료
            </button>
          </div>
        </dialog>
      </>
    </div>
  );
}

export default FilterModal;
