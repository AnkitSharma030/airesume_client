import { create } from "zustand";

export const useAnalysisStore = create((set) => ({
  analysis: null,                        // store your analysis result
  setAnalysis: (data) => set({ analysis: data }), // update state
  clearAnalysis: () => set({ analysis: null })    // optional: reset state
}));
