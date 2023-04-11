import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface QuizState {
  items: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

const initialState: QuizState = {
   items: [],
   status: "idle",
}

export const fetchQuestions = createAsyncThunk(
  "questions/getQuestion",
  async () => {
    const res = await axios(
     "https://opentdb.com/api.php?amount=10&difficulty=hard&type=multiple&category=9"
    );
    console.log("res",res.data.results)
    return res.data;
  }
);

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
  
extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending.type, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuestions.fulfilled.type, (state, action: PayloadAction<any>) => {
        state.items = [...state.items, ...action.payload.results];
        state.status = "succeeded";
      })
      .addCase(fetchQuestions.rejected.type, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
},
)

// export const { } = quizSlice.actions

export default quizSlice.reducer

