import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import styles from "./styles/menu.module.css";

export default function Filter({ onFilterChange }) {
  const [selected, setSelected] = useState(new Set(["전체"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const handleFilterChange = (keys) => {
    setSelected(keys);
    onFilterChange(Array.from(keys).join(", ")); // 부모 컴포넌트로 선택된 값 전달
  };

  return (
    <>
      <div>
        {/* 필터 1 */}
        <Dropdown>
          <DropdownTrigger>
            <Button auto light className={styles.filter}>
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection actions"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={handleFilterChange}
          >
            <DropdownItem key="전체">전체</DropdownItem>
            <DropdownItem key="금액 낮은 순">금액 낮은 순</DropdownItem>
            <DropdownItem key="금액 높은 순">금액 높은 순</DropdownItem>
            <DropdownItem key="데이터 많은 순">데이터 많은 순</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* 필터 2 */}
      <div style={{ paddingLeft: "10px" }}>
        <Button auto light className={styles.filter}>
          <Icon icon="rivet-icons:filter" className={styles.filterIcon} />
          필터
        </Button>
      </div>
    </>
  );
}
