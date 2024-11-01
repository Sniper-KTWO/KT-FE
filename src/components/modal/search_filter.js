import React, { useState, useEffect } from "react";
import CustomFilterCard from "../tab/customFilterCard";
import FilterModal from "./filter_modal";
import Filter from "../dropdown/filter";
import styles from "../tab/styles/customTab.module.css";

function SearchFilter() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // 데이터 fetching 함수
  const fetchData = async (minFee, maxFee, network, net) => {
    try {
      const response = await fetch(
        "http://3.35.51.214/api/search_plan_filter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            min_fee: minFee,
            max_fee: maxFee,
            network_type: network,
            net: net,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("데이터를 가져오는 데 실패했습니다.");
      }

      const result = await response.json();
      setData(result.plans || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 필터 변경 시 호출되는 함수
  const onSearchChange = ({ minFee, maxFee, network }) => {
    setLoading(true);
    fetchData(minFee, maxFee, network);
  };

  useEffect(() => {
    fetchData(0, 70000, []);
  }, []);

  // 로딩 상태일 때
  if (loading) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  // 에러가 발생했을 때
  if (error) {
    return <p>에러가 발생했습니다: {error}</p>;
  }

  return (
    <div>
      {/* 필터 컴포넌트 */}
      <div className={styles.filter}>
        <div className={styles.result}>{data.totalSize}개의 결과</div>
        <div className={styles.filter2}>
          <Filter onSearchChange={onSearchChange} />
        </div>
      </div>
      {/* <FilterModal onSearchChange={onSearchChange} /> */}

      {/* 데이터를 출력할 컴포넌트 */}
      <CustomFilterCard data={data} />
    </div>
  );
}

export default SearchFilter;
