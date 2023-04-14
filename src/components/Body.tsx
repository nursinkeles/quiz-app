import { ROUTE } from "../constants/Constant";

export const Body = () => {
  const findRoute = ROUTE.find(
    (item) => item.pathname === window.location.pathname
  );

  return <div>{findRoute?.component}</div>;
};
