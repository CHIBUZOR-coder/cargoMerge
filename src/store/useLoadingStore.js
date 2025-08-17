// useLoadingStore.js
import { create } from "zustand";

export const useLoadingStore = create((set) => ({
  loading: {},
  setLoading: (key, val) =>
    set((state) => ({
      loading: { ...state.loading, [key]: val },
    })),
}));
