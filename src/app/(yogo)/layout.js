import Image from 'next/image';
import { Icon } from '@iconify/react';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
} from '@nextui-org/react';
import styles from '@/app/layout.css';
import Menu from '@/components/dropdown/menu';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar
        isCompact
        isBordered
        variant="sticky"
        classNames={{ wrapper: 'px-0' }} // 패딩값 소거
      >
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/images/kt_logo.png"
              alt="kt_logo"
              width={40}
              height={35}
              className={styles.ktLogo}
            />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button isIconOnly variant="light" size="sm">
              <Icon
                icon="solar:headphones-round-outline"
                width={30}
                height={30}
              />
            </Button>
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
    </div>
  );
}
