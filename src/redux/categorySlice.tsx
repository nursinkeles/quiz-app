import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../redux/store";
import { initialState, Category } from "../types/Type";

const BASE_URL = "https://opentdb.com/";
export const fetchCategories = createAsyncThunk(
  "categories/getCategory",
  async () => {
    const response = await axios.get(`${BASE_URL}api_category.php`);
    const data = response.data.trivia_categories;

    return data.map((category: any) => ({
      id: category.id,
      name: category.name,
    }));
  }
);

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
      .addCase(
        fetchCategories.rejected.type,
        (state, action: PayloadAction<any>) => {
          state.status = "failed";
          state.error = action.payload;
        }
      );
  },
});
const categoriesSelector = (state: RootState) => state.category.items;
const statusSelector = (state: RootState) => state.category.status;
const errorSelector = (state: RootState) => state.category.error;
const selectedCategorySelector = (state: RootState) =>
  state.category.selectedCategoryId;
const selectedDifficultySelector = (state: RootState) =>
  state.category.selectedDifficulty;

export {
  categoriesSelector,
  statusSelector,
  errorSelector,
  selectedCategorySelector,
  selectedDifficultySelector,
};

export const { selectCategory, selectDifficulty } = categorySlice.actions;

export default categorySlice.reducer;
