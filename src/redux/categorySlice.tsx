import { useState } from "react";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface QuizState {
  items: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
  selectedCategoryId?: number;
}

const initialState: QuizState = {
  items: [],
  status: "idle",
  selectedCategoryId: undefined,
};

interface Category {
  id: number;
  name: string;
}

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
      localStorage.setItem("category", JSON.stringify(action.payload));
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
export const { selectCategory } = categorySlice.actions;

export default categorySlice.reducer;
