"use client";

import { useSearchParams } from "next/navigation";

export default function PlanDetailPage({ params }) {
  const searchParams = useSearchParams();
  const name = searchParams.get("name"); // 'name' 쿼리 파라미터 가져오기
  const mobileDataStr = searchParams.get("mobileDataStr"); // 'mobileDataStr' 쿼리 파라미터 가져오기
  console.log(searchParams);

  return (
    <div>
      <h1>{params.id} 요금제 변경 상세 페이지</h1>
      <p>Plan Name: {name}</p>
      <p>mobileDataStr: {mobileDataStr}</p>
    </div>
  );
}
