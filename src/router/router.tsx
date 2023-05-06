import { Routes, Route } from "react-router-dom";
import { ROUTE } from "../constants/Constant";

export const router = () => {
  return (
    <Routes>
      {ROUTE.map(({ pathname, component }) => (
        <Route key={pathname} path={pathname} element={component} />
      ))}
    </Routes>
  );
};
