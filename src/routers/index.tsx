import { FC } from "react";

import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes";

interface IRouterProps {}

const Router: FC<IRouterProps> = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default Router;
