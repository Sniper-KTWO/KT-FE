"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/react";
import styles from "@/components/pagination/styles/pagination.module.css";

export default function Pagination({
  totalItems, // 데이터의 총 개수
  itemCountPerPage, // 페이지 당 보여줄 데이터 개수
  pageCount, // 보여줄 페이지 개수
  currentPage, // 현재 페이지
}) {
  const totalPages = Math.ceil(totalItems / itemCountPerPage); // 전체 페이지 수
  const [start, setStart] = useState(1); // 시작 페이지
  const noPrev = start === 1; // 이전 페이지 버튼 활성화 여부
  const noNext = start + pageCount - 1 >= totalPages; // 다음 페이지 버튼 활성화 여부
  const router = useRouter();
  const searchParams = useSearchParams();

  // 보여질 페이지 숫자 설정
  useEffect(() => {
    if (currentPage >= start + pageCount) {
      setStart((prev) => prev + pageCount);
    } else if (currentPage < start) {
      setStart((prev) => prev - pageCount);
    }
    console.log("currentPage:", currentPage);
    console.log("start:", start);
    console.log("totalPages:", totalPages);
  }, [currentPage, pageCount, start]);

  //페이지 변경 시 URL 업데이트하여, 렌더링 되어도 페이지 번호가 유지됨
  const updatePage = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={`${styles.move} ${noPrev ? styles.invisible : ""}`}>
          {/* Link 대신 버튼을 사용하여 onClick 이벤트로 URL 업데이트하면, 페이지 번호가 즉시 URL에 반영됨 */}
          <Button
            variant="light"
            size="sm"
            onClick={() => updatePage(start - 1)}
          >
            이전
          </Button>
        </li>
        {[...Array(pageCount)].map((_, i) => (
          <li key={start + i}>
            {start + i <= totalPages && (
              <Button
                variant="light"
                size="sm"
                onClick={() => updatePage(start + i)}
                className={`${styles.page} ${
                  currentPage === start + i ? styles.active : ""
                }`}
              >
                {start + i}
              </Button>
            )}
          </li>
        ))}
        <li className={`${styles.move} ${noNext ? styles.invisible : ""}`}>
          <Button
            variant="light"
            size="sm"
            onClick={() => updatePage(start + pageCount)}
          >
            다음
          </Button>
        </li>
      </ul>
    </div>
  );
}
