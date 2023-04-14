import StartPage from "../pages/StartPage";
import CategoryPage from "../pages/CategoryPage";
import InfoPage from "../pages/InfoPage";
import QuestionsPage from "../pages/QuestionsPage";
import ResultPage from "../pages/ResultPage";

export const ROUTE = [
  { pathname: "/", component: <StartPage /> },
  { pathname: "/categories", component: <CategoryPage /> },
  { pathname: "/info", component: <InfoPage /> },
  { pathname: "/questions", component: <QuestionsPage /> },
  { pathname: "/result", component: <ResultPage /> },
];
