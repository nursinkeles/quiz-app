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

export interface Category {
  id: number;
  name: string;
}

export interface CategoryListProps {
  categories: Category[];
  onCategoryClick: (categoryId: number) => void;
}

interface QuizState {
  items: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
  selectedCategoryId?: number;
  selectedDifficulty?: string;
}

export const initialState: QuizState = {
  items: [],
  status: "idle",
  selectedCategoryId: undefined,
  selectedDifficulty: undefined,
};

export interface QuizState2 {
  items: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

export interface QuestionRequestParams {
  amount: number;
  difficulty: string;
  type: string;
  category: number;
  [key: string]: string | number;
}
