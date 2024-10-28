import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePlanStore = create(
  persist(
    (set) => ({
      plan: null,
      setPlan: (plan) => set({ plan }),
    }),
    {
      name: "plan-storage", // 로컬 스토리지 이름
    }
  )
);
