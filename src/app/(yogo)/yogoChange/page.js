import ChangeMenu from "@/components/change/change_menu";
import CustomTab from "@/components/tab/customTab";

import { Button } from "@nextui-org/react";
import "./styles/page.css";
export default function yogoChange() {
  return (
    <div className="homeStyle">
      <ChangeMenu />
      <CustomTab />
    </div>
  );
}
