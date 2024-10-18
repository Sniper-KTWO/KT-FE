"use client";

import { DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import styles from "@/styles/menu.module.css";

function handleClick() {
  console.log("click");
}

export default function Menu() {
  const menulist = [
    "요고 다이렉트",
    "요고 가입 혜택",
    "요고 브랜드 스토리",
    "요고 요금제 변경",
    "타사 요금제 비교",
  ];

  return (
    <>
      <DropdownMenu aria-label="Actions">
        {menulist.map((item, index) => (
          <DropdownItem
            key={index}
            className={styles.menuList}
            onClick={handleClick}
          >
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </>
  );
}
