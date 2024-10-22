"use client";

import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function Send() {
  return (
    <>
      <Button isIconOnly variant="light" size="sm">
        <Icon icon="bi:send-fill" width={30} height={30} />
      </Button>
    </>
  );
}
