import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar isBordered>
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/images/kt_logo.png"
              alt="kt_logo"
              width={30}
              height={25}
            />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button variant="light">
              <Icon
                icon="solar:headphones-round-outline"
                width={40}
                height={40}
              />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button variant="light">
              <Icon icon="solar:hamburger-menu-linear" width={40} height={40} />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {children}
    </div>
  );
}
