"use client";

import { useState, useEffect } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import ChangeMenu from "@/components/change/change_menu";
import CustomTabPanel from "./customTabPanel";

export default function CustomTab() {
  const [searchText, setSearchText] = useState("");
  const [prevSearchText, setPrevSearchText] = useState("");

  const handleTabChange = (key) => {
    // 이전 searchText를 업데이트
    setPrevSearchText(searchText);
    // 새로운 searchText를 업데이트
    setSearchText(key);
  };

  // 탭이 변경되면 page를 1로 초기화해야하는데 안되네...
  // 탭 변경 후 prev와 current를 console에 출력
  useEffect(() => {
    console.log("Previous searchText:", prevSearchText);
    console.log("Current searchText:", searchText);
  }, [searchText]);

  return (
    <div>
      <ChangeMenu />

      <Tabs
        variant="underlined"
        aria-label="Options"
        className="text-green-600"
        style={{ fontWeight: "bold" }}
        onSelectionChange={handleTabChange} // 탭이 변경될 때 호출
      >
        <Tab key="" title="전체">
          <CustomTabPanel
            searchText={searchText}
            prevSearchText={prevSearchText}
          />
        </Tab>
        <Tab key="LTE" title="LTE">
          <CustomTabPanel
            searchText={searchText}
            prevSearchText={prevSearchText}
          />
        </Tab>
        <Tab key="5G" title="5G">
          <CustomTabPanel
            searchText={searchText}
            prevSearchText={prevSearchText}
          />
        </Tab>
      </Tabs>
    </div>
  );
}
