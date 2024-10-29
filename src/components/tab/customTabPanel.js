"use client";

import React from "react";
import { useState, useEffect } from "react";
import styles from "@/components/tab/styles/customTab.module.css";
import Filter from "../dropdown/filter";
import CustomTabCard from "./customTabCard";
import Loading from "../loading/loading";
import { useSearchParams } from "next/navigation";
import Pagination from "../pagination/pagination";
import { searchPlans } from "@/api/searchPlan";
import { searchPlanFilter } from "@/api/searchPlanFilter";

export default function CustomTabPanel({ searchText }) {
  // API에서 가져온 데이터를 저장할 상태 변수
  const [data, setData] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [filter, setFilter] = useState("전체");
  const [filterParams, setFilterParams] = useState({}); // 필터 값 저장
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // 페이지네이션 설정
  const itemCountPerPage = 10; // 페이지당 항목 수
  const pageCount = 5; // 한 번에 보여줄 페이지네이션 버튼 수

  // 데이터 fetching 함수
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await searchPlans(searchText); // API 모듈 사용
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [searchText]);

  // 로딩 상태일 때
  if (loading) {
    return <Loading />;
  }

  // 에러가 발생했을 때
  if (error) {
    return <p>에러가 발생했습니다: {error}</p>;
  }

  // 첫번째 필터 변경 시
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // 첫번째 필터 적용
  const applyFilter = (plans) => {
    switch (filter) {
      case "금액 낮은 순":
        // plans 배열을 [...]로 복사한 후 새로운 배열로 정렬
        // 원본 배열을 복사한 후에 정렬하여 불변성을 유지하고, React가 변경을 감지할 수 있게 함
        return [...plans].sort((a, b) => a.fee - b.fee); // 오름차순 정렬
      case "금액 높은 순":
        return [...plans].sort((a, b) => b.fee - a.fee); // 내림차순 정렬
      case "데이터 많은 순":
        return [...plans].sort((a, b) => b.mobileData - a.mobileData); // 내림차순 정렬
      default:
        return plans;
    }
  };

  // 두번째 필터 값 변경 시 필터 API 호출
  // FilterModal로부터 필터 값을 받아 설정하는 함수
  const handleSearchChange = async ({ minFee, maxFee, network }) => {
    // 네트워크 타입을 문자열로 변환
    const networkTypeString = Array.isArray(network)
      ? network.join(",")
      : network;

    setFilterParams({ minFee, maxFee, network });
    setLoading(true);
    try {
      const result = await searchPlanFilter(minFee, maxFee, networkTypeString); // 필터 API 호출
      setData(result);
      setTotalItems(result.totalSize || 0); // 총 항목 수 업데이트
      console.log("필터 API 결과:", result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    console.log("변경되었습니다.");
  };

  // 첫번쨰 필터 or 두번쨰 필터가 적용된 데이터
  const filteredData = applyFilter(data?.plans || data?.planMetas || []);

  // 5G 데이터일 때만 보이게 어케 하지...
  //   const fivegData = data.planMetas.filter((plan) => plan.net === "5G");
  //   console.log(fivegData);

  // 페이지에 맞는 데이터 슬라이스
  const startIndex = (currentPage - 1) * itemCountPerPage;
  const currentData =
    filteredData.length > 0
      ? filteredData.slice(startIndex, startIndex + itemCountPerPage)
      : [];

  return (
    <>
      {/* 필터 컴포넌트 */}
      <div className={styles.filter}>
        <div className={styles.result}>{data.totalSize}개의 결과</div>
        <div className={styles.filter2}>
          <Filter
            onFilterChange={handleFilterChange}
            onSearchChange={handleSearchChange}
          />
        </div>
      </div>

      {/* 데이터를 출력할 컴포넌트 */}
      <CustomTabCard data={{ plans: currentData }} />

      <Pagination
        totalItems={data.totalSize}
        itemCountPerPage={itemCountPerPage}
        pageCount={pageCount}
        currentPage={currentPage}
      />
    </>
  );
}
