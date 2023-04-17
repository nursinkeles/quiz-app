import StartPage from "../pages/StartPage";
import CategoryPage from "../pages/CategoryPage";
import InfoPage from "../pages/InfoPage";
import QuestionsPage from "../pages/QuestionsPage";
import ResultPage from "../pages/ResultPage";

export const ROUTE = [
  { pathname: "/", component: <StartPage />, title: "" },
  {
    pathname: "/categories",
    component: <CategoryPage />,
    title: "Choose Category",
  },
  { pathname: "/info", component: <InfoPage />, title: "info page" },
  { pathname: "/questions", component: <QuestionsPage />, title: "questions" },
  { pathname: "/result", component: <ResultPage />, title: "" },
];

export const FindRoute = ROUTE.find(
  (item) => item.pathname === window.location.pathname
);
