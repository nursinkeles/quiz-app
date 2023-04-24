import StartPage from "../pages/StartPage";
import CategoryPage from "../pages/CategoryPage";
import DifficultyPage from "../pages/DifficultyPage";
import InfoPage from "../pages/InfoPage";
import QuestionsPage from "../pages/QuestionsPage";
import ResultPage from "../pages/ResultPage";

export const ROUTE = [
  { pathname: "/", component: <StartPage />, title: "", class: "gradient" },
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
    title: "Questions",
    class: "card",
  },
  {
    pathname: "/result",
    component: <ResultPage />,
    title: "Quiz Completed!",
    class: "card",
  },
];

export const FindRoute = ROUTE.find(
  (item) => item.pathname === window.location.pathname
);

export const DIFFICULTY = ["Easy", "Medium", "Hard"];
