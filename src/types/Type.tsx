export interface CurrentRoute {
  pathname: string;
  title?: string;
  class?: string;
}

export interface HeaderProps {
  currentRoute: CurrentRoute | undefined;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export enum ApiStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "succeeded",
  FAILED = "failed",
}

export interface Category {
  id: number;
  name: string;
}

export interface CategoryListProps {
  categories: Category[];
  onCategoryClick: (categoryId: number) => void;
}
export type Answer = {
  answer: string;
  isCorrect: boolean | null;
};

interface QuizState {
  items: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
  selectedCategoryId?: number;
  selectedDifficulty?: string;
}

export const initialState: QuizState = {
  items: [],
  status: ApiStatus.IDLE,
  selectedCategoryId: undefined,
  selectedDifficulty: undefined,
};

export interface QuizState2 {
  items: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
  answers: Answer[];
}

export interface QuestionRequestParams {
  amount: number;
  difficulty: string;
  type: string;
  category: number;
  [key: string]: string | number;
}

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type RouteType = {
  pathname: string;
  component: JSX.Element;
  title?: string;
  class: string;
};

export type ErrorProps = {
  text: string | undefined;
};

export type ArrowButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
};

export type QuestionHeaderItem = {
  title: string;
  value: string;
};

export type QuestionHeaderProps = {
  object: QuestionHeaderItem[];
};
