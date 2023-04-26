// import StartPage from "../pages/StartPage";
// import InfoPage from "../pages/InfoPage";
// import QuestionsPage from "../pages/QuestionsPage";
// import ResultPage from "../pages/ResultPage";
// import CategoryPage from "../pages/CategoryPage";
// import { createBrowserRouter } from "react-router-dom";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <StartPage />,
//   },
//   {
//     path: "/categories",
//     element: <CategoryPage />,
//   },
//   {
//     path: "/info",
//     element: <InfoPage />,
//   },
//   {
//     path: "/questions",
//     element: <QuestionsPage />,
//   },
//   {
//     path: "/result",
//     element: <ResultPage />,
//   },
// ]);

// import { BrowserRouter, Route, RouteProps } from "react-router-dom";

// interface MyRouteProps extends RouteProps {
//   Component: React.ElementType;
//   path?: string | string[];
//   Exact?: boolean;
// }
// export function Router() {
//   return (
//     <BrowserRouter>
//       <Route Exact path="/" Component={StartPage} />
//       <Route path="/categories" Component={CategoryPage} />
//     </BrowserRouter>
//   );
// }
// import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import StartPage from "../pages/StartPage";
// import QuestionsPage from "../pages/QuestionsPage";
// import CategoryPage from "../pages/CategoryPage";
// export const router = () => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component={StartPage} />
//         <Route path="/category" component={CategoryPage} />
//         <Route path="/questions" component={QuestionsPage} />
//       </Switch>
//     </BrowserRouter>
//   );
// };
import { Routes, Route } from "react-router-dom";
import StartPage from "../pages/StartPage";
import CategoryPage from "../pages/CategoryPage";
import DifficultyPage from "../pages/DifficultyPage";
import InfoPage from "../pages/InfoPage";
import QuestionsPage from "../pages/QuestionsPage";
import ResultPage from "../pages/ResultPage";

export const router = () => {
  return (
    <Routes>
      <Route path="/categories" element={<CategoryPage />} />
      <Route path="/difficulty" element={<DifficultyPage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/questions" element={<QuestionsPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/" element={<StartPage />} />
    </Routes>
  );
};
