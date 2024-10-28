export const searchPlans = async (searchText) => {
  try {
    const response = await fetch("http://3.35.51.214/api/search_plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: 0,
        size: 9999,
        searchText: searchText,
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
