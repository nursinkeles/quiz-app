import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { QuizState2 } from "../types/Type";
import { fetchQuestions } from "../api/api";
import { ApiStatus } from "../types/Type";

const initialState: QuizState2 = {
  items: [],
  status: ApiStatus.IDLE,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending.type, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchQuestions.fulfilled.type,
        (state, action: PayloadAction<any>) => {
          state.items = [...state.items, ...action.payload.results];
          state.status = "succeeded";
        }
      )
      .addCase(fetchQuestions.rejected.type, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
const quizSelector = (state: RootState) => state.quiz.items;
const quizStatusSelector = (state: RootState) => state.quiz.status;
const quizErrorSelector = (state: RootState) => state.quiz.error;

export { quizSelector, quizStatusSelector, quizErrorSelector };

export default quizSlice.reducer;
