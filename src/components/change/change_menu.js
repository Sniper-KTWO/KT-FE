'use client';
import React from 'react';
import Image from 'next/image';
import changeImg from '/public/images/change_menu.png';
import './styles/change_menu.css';

function ChangeMenu() {
  return (
    <div className="menu">
      <div className="menu1">요고 요금제 변경</div>
      <Image src={changeImg} width={190} height={130} />
      <h3 className="menu2">
        자급제폰 KT고객님 <br /> 알뜰한 요고 요금제로 <br /> 변경할 수 있어요.
      </h3>
    </div>
  );
}

export default ChangeMenu;
