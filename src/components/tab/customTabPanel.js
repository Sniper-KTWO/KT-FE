"use client";

import { useState, useEffect } from "react";
import { Card, CardBody } from "@nextui-org/react";

export default function CustomTabPanel() {
  // API에서 가져온 데이터를 저장할 상태 변수
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // 데이터 fetching 함수
  const fetchData = async () => {
    try {
      const response = await fetch("http://3.35.51.214/api/search_plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: "요금제",
        }),
      });

      if (!response.ok) {
        throw new Error("데이터를 가져오는 데 실패했습니다.");
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

  console.log(data.totalSize);

  return (
    <p>
      {data.totalSize}개의 결과
      {/* API에서 가져온 데이터가 배열일 때 데이터를 반복 출력 */}
      {/* {data && data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p>데이터가 없습니다.</p>
        )} */}
    </p>
  );
}
