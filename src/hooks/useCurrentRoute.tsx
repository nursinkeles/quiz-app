import { useLocation } from "react-router-dom";
import { CurrentRoute } from "../types/Type";
import { ROUTE } from "../constants/Constant";

export const useCurrentRoute = (): CurrentRoute | undefined => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const currentRoute = ROUTE.find((item) => item.pathname === currentPathname);
  return currentRoute;
};
