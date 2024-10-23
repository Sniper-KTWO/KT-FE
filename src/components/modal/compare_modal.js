'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import './styles/compare_modal.css';
import { useRouter } from 'next/navigation';
import { useCompare } from './compareContext';

function CompareModal() {
  const { selectedItems, addItem, removeItem, getNextItemId } = useCompare();
  const [itemId, setItemId] = useState(null);
  const router = useRouter();

  // useEffect(() => {
  //   if (itemId === null) {
  //     setItemId(getNextItemId());
  //   }
  // }, [getNextItemId, itemId]);

  const handleCompareClick = () => {
    if (itemId !== null) {
      addItem(itemId);
      showModal();
    }
  };

  const handleConfirmation = () => {
    if (selectedItems.length === 2) {
      router.push('/yogoCompare');
    } else {
      closeModal();
    }
  };

  const handleCancel = () => {
    removeItem();
    closeModal();
  };

  const dialogRef = useRef(null);

  const showModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <div>
      <button onClick={handleCompareClick}>비교하기</button>

      <dialog ref={dialogRef}>
        <Icon
          className="close"
          onClick={handleCancel}
          icon="material-symbols-light:close"
          width={20}
          height={20}
        />
        <div className="compare">
          <Icon icon="material-symbols:download" width={30} height={40} />
          <div className="alert">
            {selectedItems.length === 2 ? (
              <>
                비교함에 담았어요. <br /> 비교함으로 이동할게요.
              </>
            ) : (
              <>
                비교함에 담았어요. <br />
                비교할 요금제를 하나 더 담아주세요.
              </>
            )}
          </div>
          <div>{selectedItems.length === 2 ? '(2/2)' : `(1/2)`}</div>
          <button className="check" onClick={handleConfirmation}>
            {selectedItems.length === 2 ? '비교함' : '확인'}
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default CompareModal;
