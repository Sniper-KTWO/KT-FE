'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import styles from './styles/customTab.module.css';
import Filter from '../dropdown/filter';
import CustomTabCard from './customTabCard';
import FilterModal from '../modal/filter_modal';

export default function CustomTabPanel({ searchText }) {
  // API에서 가져온 데이터를 저장할 상태 변수
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // 데이터 fetching 함수
  const fetchData = async () => {
    try {
      const response = await fetch('http://3.35.51.214/api/search_plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${process.env.LYNN_PUBLIC_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          page: 0,
          size: 9999,
          searchText: searchText,
        }),
      });

      if (!response.ok) {
        throw new Error('데이터를 가져오는 데 실패했습니다.');
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 로딩 상태일 때
  if (loading) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  // 에러가 발생했을 때
  if (error) {
    return <p>에러가 발생했습니다: {error}</p>;
  }

  // 5G 데이터일 때만 보이게 어케 하지...
  //   const fivegData = data.planMetas.filter((plan) => plan.net === "5G");
  //   console.log(fivegData);

  return (
    <>
      {/* 필터 컴포넌트 */}
      <div className={styles.filter}>
        <div className={styles.result}>{data.totalSize}개의 결과</div>
        <div className={styles.filter2}>
          <Filter />
          <FilterModal />
        </div>
      </div>

      {/* 데이터를 출력할 컴포넌트 */}
      <CustomTabCard data={data} />
    </>
  );
}
