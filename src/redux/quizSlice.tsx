import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../redux/store";
import { QuestionRequestParams, QuizState2 } from "../types/Type";

const initialState: QuizState2 = {
  items: [],
  status: "idle",
};
const BASE_URL = "https://opentdb.com/";

export const fetchQuestions = createAsyncThunk(
  "questions/getQuestion",
  async (params: QuestionRequestParams) => {
    const queryString = Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&");
    const res = await axios(`${BASE_URL}api.php?${queryString}`);
    console.log("res", res.data.results);
    return res.data;
  }
);

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
      .addCase(
        fetchQuestions.rejected.type,
        (state, action: PayloadAction<any>) => {
          state.status = "failed";
          state.error = action.payload;
        }
      );
  },
});
const quizSelector = (state: RootState) => state.quiz.items;
const statusSelector = (state: RootState) => state.quiz.status;
const errorSelector = (state: RootState) => state.quiz.error;

export { quizSelector, statusSelector, errorSelector };

export default quizSlice.reducer;
