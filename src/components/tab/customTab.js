"use client";

import { Tabs, Tab, Card } from "@nextui-org/react";
import styles from "@/components/tab/styles/customTab.module.css";
import ChangeMenu from "@/components/change/change_menu";
import CustomTabPanel from "./customTabPanel";

export default function CustomTab() {
  return (
    <div>
      <ChangeMenu />

      <Tabs
        variant="underlined"
        aria-label="Options"
        className="text-green-600"
        style={{ fontWeight: "bold" }}
      >
        <Tab key="전체" title="전체">
          <CustomTabPanel searchText="" />
        </Tab>
        <Tab key="LTE" title="LTE">
          <CustomTabPanel searchText="LTE" />
        </Tab>
        <Tab key="5G" title="5G">
          <CustomTabPanel searchText="5G" />
        </Tab>
      </Tabs>
    </div>
  );
}
