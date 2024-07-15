// src/store/formulaStore.js
import create from "zustand";

const useFormulaStore = create((set) => ({
  formulaParts: [],
  addPart: (part) =>
    set((state) => ({ formulaParts: [...state.formulaParts, part] })),
  removePart: (index) =>
    set((state) => ({
      formulaParts: state.formulaParts.filter((_, i) => i !== index),
    })),
  updatePart: (index, newPart) =>
    set((state) => ({
      formulaParts: state.formulaParts.map((part, i) =>
        i === index ? newPart : part
      ),
    })),
}));

export default useFormulaStore;
