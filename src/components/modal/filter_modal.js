'use client';
import React, { useState, useRef } from 'react';
import './styles/filter_modal.css';
import { Divider } from '@nextui-org/react';
import Image from 'next/image';
import PriceSlider from '../slider/price_slider';

function FilterModal() {
  const dialogRef = useRef(null);
  // 각 버튼의 상태를 독립적으로 관리하기 위해 useState를 각각 선언
  const [isKTActive, setIsKTActive] = useState(false);
  const [isSKTActive, setIsSKTActive] = useState(false);
  const [isLGActive, setIsLGActive] = useState(false);

  const handleKTClick = () => {
    setIsKTActive((prevState) => !prevState);
  };

  const handleSKTClick = () => {
    setIsSKTActive((prevState) => !prevState);
  };

  const handleLGClick = () => {
    setIsLGActive((prevState) => !prevState);
  };

  const showModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <div>
      <button onClick={showModal}>필터링</button>
      <dialog ref={dialogRef}>
        <div className="question">어떤 요금제를 찾으시나요?</div>
        <Divider className="divide" />
        <PriceSlider />

        <div className="tel">통신사</div>
        <div className="logos">
          <button
            className="logo"
            onClick={handleKTClick}
            style={{
              backgroundColor: !isKTActive ? '#f5f5f5' : '#86e8d1',
            }}
          >
            <Image
              className="logoImg"
              src={'/images/kt_logo.png'}
              alt="kt"
              width={15}
              height={15}
            />
            <span style={{ marginLeft: '-45px' }}>KT</span>
          </button>
          <button
            className="logo"
            onClick={handleSKTClick}
            style={{
              backgroundColor: !isSKTActive ? '#f5f5f5' : '#86e8d1',
            }}
          >
            <Image
              className="logoImg"
              src={'/images/skt_logo.png'}
              alt="skt"
              width={17}
              height={17}
            />
            <span style={{ marginLeft: '-45px' }}>SKT</span>
          </button>
          <button
            className="logo"
            onClick={handleLGClick}
            style={{
              backgroundColor: !isLGActive ? '#f5f5f5' : '#86e8d1',
            }}
          >
            <Image
              className="logoImg"
              src={'/images/lgu_logo.png'}
              alt="LG"
              width={17}
              height={17}
            />
            <span style={{ marginLeft: '-45px' }}>LG</span>
          </button>
        </div>
        <div className="buttons">
          <button className="cancel" onClick={closeModal}>
            취소
          </button>
          <button className="ok" onClick={closeModal}>
            완료
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default FilterModal;
