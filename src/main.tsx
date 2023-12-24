import React, { Suspense } from "react";

import ReactDOM from "react-dom/client";

import { CircularProgress } from "@mui/material";

import ApiProvider from "./providers/api";
import Router from "./routers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<CircularProgress />}>
      <ApiProvider>
        <Router />
      </ApiProvider>
    </Suspense>
  </React.StrictMode>
);
