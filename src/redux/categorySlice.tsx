import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { initialState, Category } from "../types/Type";
import { fetchCategories } from "../api/api";

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<number>) => {
      state.selectedCategoryId = action.payload;
    },
    selectDifficulty: (state, action: PayloadAction<string>) => {
      state.selectedDifficulty = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending.type, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCategories.fulfilled.type,
        (state, action: PayloadAction<Category[]>) => {
          state.items = action.payload;
          state.status = "succeeded";
        }
      )
      .addCase(fetchCategories.rejected.type, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const categoriesSelector = (state: RootState) => state.category.items;
const categoryStatusSelector = (state: RootState) => state.category.status;
const categoryErrorSelector = (state: RootState) => state.category.error;
const selectedCategorySelector = (state: RootState) =>
  state.category.selectedCategoryId;
const selectedDifficultySelector = (state: RootState) =>
  state.category.selectedDifficulty;

export {
  categoriesSelector,
  categoryStatusSelector,
  categoryErrorSelector,
  selectedCategorySelector,
  selectedDifficultySelector,
};

export const { selectCategory, selectDifficulty } = categorySlice.actions;

export default categorySlice.reducer;
