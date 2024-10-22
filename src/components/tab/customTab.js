"use client";

import { Tabs, Tab } from "@nextui-org/react";
import styles from "@/components/tab/styles/customTab.module.css";
import CustomTabPanel from "./customTabPanel";

export default function CustomTab() {
  return (
    <div>
      <Tabs
        variant="underlined"
        aria-label="Options"
        className="text-green-600"
        style={{ fontWeight: "bold" }}
      >
        <Tab key="전체" title="전체">
          <CustomTabPanel />
        </Tab>
        <Tab key="LTE" title="LTE">
          LTE
        </Tab>
        <Tab key="5G" title="5G">
          5G
        </Tab>
      </Tabs>
    </div>
  );
}
