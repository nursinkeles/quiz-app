import StartPage from "../pages/StartPage";
import InfoPage from "../pages/InfoPage";
import QuestionsPage from "../pages/QuestionsPage";
import ResultPage from "../pages/ResultPage";
import CategoryPage from "../pages/CategoryPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/categories",
    element: <CategoryPage />,
  },
  {
    path: "/info",
    element: <InfoPage />,
  },
  {
    path: "/questions",
    element: <QuestionsPage />,
  },
  {
    path: "/result",
    element: <ResultPage />,
  },
]);
