"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
  Tooltip,
} from "@nextui-org/react";
import styles from "@/app/layout.css";
import Menu from "@/components/dropdown/menu";
import { useRouter, usePathname } from "next/navigation"; // 전체 경로 가져오기

export default function Layout({ children, modal }) {
  const router = useRouter();
  const pathname = usePathname(); // 현재 경로 가져오기

  const goToCompare = () => {
    router.push("/yogoCompare"); // 요금제 비교 페이지로 이동
  };

  const chatModalHandler = useCallback(() => {
    router.push("/chatBot"); // 챗봇 페이지로 이동
  }, [router]);

  return (
    <div>
      <Navbar
        isBordered
        variant="sticky"
        classNames={{ wrapper: "px-0" }} // 패딩값 소거
      >
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/images/kt_logo.png"
              alt="kt_logo"
              width={40}
              height={35}
              className="ktLogo"
            />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            {/* 특정 경로(/yogoChange)에서만 아이콘 추가 */}
            {pathname === "/yogoChange" && (
              <Tooltip content="요금제 비교함">
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  onPress={goToCompare} // 요금제 비교 페이지로 이동
                  style={{ marginRight: "10px" }}
                >
                  <Icon
                    icon="material-symbols:download"
                    width={30}
                    height={40}
                  />
                </Button>
              </Tooltip>
            )}
            <Tooltip content="챗봇">
              <Button
                isIconOnly
                variant="light"
                size="sm"
                onPress={chatModalHandler}
              >
                <Icon
                  icon="solar:headphones-round-outline"
                  width={30}
                  height={30}
                />
              </Button>
            </Tooltip>
          </NavbarItem>
          <Dropdown placement="bottom-right">
            <NavbarItem className={styles.menu}>
              <DropdownTrigger>
                <Button isIconOnly variant="light" size="sm">
                  <Icon
                    icon="solar:hamburger-menu-linear"
                    width={30}
                    height={30}
                  />
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            {/* Menu 컴포넌트 추가 */}
            <Menu />
          </Dropdown>
        </NavbarContent>
      </Navbar>

      {children}
      {modal}
    </div>
  );
}
