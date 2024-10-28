import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCompareStore = create(
  persist(
    (set) => ({
      plans: [null, null],
      addPlan: (plan) =>
        set((state) => {
          // plans 배열에서 첫 번째 비어 있는 슬롯(null)을 찾습니다.
          const index = state.plans.findIndex((p) => p === null);
          if (index !== -1) {
            const updatedPlans = [...state.plans];
            updatedPlans[index] = plan;
            return { plans: updatedPlans };
          }
          return state;
        }),
      removePlan: () =>
        set((state) => {
          const updatedPlans = [...state.plans];
          // 마지막으로 채워진 요소를 제거합니다.
          const lastFilledIndex = updatedPlans.lastIndexOf(
            updatedPlans.find((p) => p !== null)
          );
          if (lastFilledIndex !== -1) {
            updatedPlans[lastFilledIndex] = null;
          }
          return { plans: updatedPlans };
        }),
      resetPlans: () =>
        set(() => ({
          plans: [null, null],
        })),
    }),
    {
      name: "compare-storage",
    }
  )
);
