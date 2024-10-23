"use client";

import { DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import styles from "@/components/dropdown/styles/menu.module.css";

export default function Menu() {
  const menulist = [
    { name: "요고 다이렉트", url: "/" },
    { name: "요고 가입 혜택", url: "/yogoEvent" },
    { name: "요고 브랜드 스토리", url: "/yogoBrand" },
    { name: "요고 요금제 변경", url: "/yogoChange" },
  ];

  return (
    <>
      <DropdownMenu aria-label="Actions">
        {menulist.map((item, index) => (
          <DropdownItem key={index} href={item.url} className={styles.menuList}>
            {item.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </>
  );
}
