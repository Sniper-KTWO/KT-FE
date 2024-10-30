export const searchPlanFilter = async (min_fee, max_fee, network_type) => {
  try {
    const response = await fetch("http://3.35.51.214/api/search_plan_filter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        min_fee: min_fee,
        max_fee: max_fee,
        network_type: network_type,
      }),
    });

    if (!response.ok) {
      throw new Error("데이터를 가져오는 데 실패했습니다.");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
