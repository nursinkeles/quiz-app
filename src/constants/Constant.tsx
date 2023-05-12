import StartPage from "../pages/StartPage";
import CategoryPage from "../pages/CategoryPage";
import DifficultyPage from "../pages/DifficultyPage";
import InfoPage from "../pages/InfoPage";
import QuestionsPage from "../pages/QuestionsPage";
import ResultPage from "../pages/ResultPage";
import { RouteType } from "../types/Type";

export const ROUTE: RouteType[] = [
  {
    pathname: "/categories",
    component: <CategoryPage />,
    title: "Choose Category",
    class: "card",
  },
  {
    pathname: "/difficulty",
    component: <DifficultyPage />,
    title: "Choose Your Level",
    class: "card",
  },
  {
    pathname: "/info",
    component: <InfoPage />,
    title: "About Questions",
    class: "dark",
  },
  {
    pathname: "/questions",
    component: <QuestionsPage />,
    class: "dark",
  },
  {
    pathname: "/result",
    component: <ResultPage />,
    title: "Quiz Completed!",
    class: "card",
  },
  { pathname: "/", component: <StartPage />, class: "gradient" },
];

export const DIFFICULTY: string[] = ["Easy", "Medium", "Hard"];
