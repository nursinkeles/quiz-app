import axios from "axios";
import { Category, Question } from "../types/Type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { QuestionRequestParams } from "../types/Type";

export const fetchCategories = createAsyncThunk(
  "categories/getCategory",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}api_category.php`
    );
    const data = response.data.trivia_categories;

    return data.map((category: Category) => ({
      id: category.id,
      name: category.name,
    }));
  }
);

const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const fetchQuestions = createAsyncThunk(
  "questions/getQuestion",
  async (params: QuestionRequestParams) => {
    const queryString = Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&");
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}api.php?${queryString}`
    );
    const data = res.data.results.map((question: Question) => ({
      ...question,
      options: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
    return data;
  }
);
