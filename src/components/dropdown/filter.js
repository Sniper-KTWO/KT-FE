import React, { useState } from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { Icon } from '@iconify/react';
import styles from './styles/menu.module.css';
import FilterModal from '../modal/filter_modal';

export default function Filter({ onFilterChange, onSearchChange }) {
  const [selected, setSelected] = useState(new Set(['전체']));
  const [filters, setFilters] = useState([]);

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  );

  const handleFilterChange = (keys) => {
    setSelected(keys);
    onFilterChange(Array.from(keys).join(', ')); // 부모 컴포넌트로 선택된 값 전달
  };

  // 필터 모달에서 받은 값을 처리하는 함수
  const handleSearchChange = ({ minFee, maxFee, network }) => {
    console.log('Filter에서 받은 값:', { minFee, maxFee, network });
    setFilters({ minFee, maxFee, network });
    if (onSearchChange) {
      onSearchChange({ minFee, maxFee, network });
    }
    console.log('onSearchChance 값:', onSearchChange);
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
      <div style={{ paddingLeft: '10px' }}>
        {/* <Button auto light className={styles.filter}>
          <Icon icon="rivet-icons:filter" className={styles.filterIcon} />
          필터
        </Button> */}
        <FilterModal onSearchChange={handleSearchChange} />
      </div>
    </>
  );
}
