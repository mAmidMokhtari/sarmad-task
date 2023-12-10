import React, { Suspense } from "react";

import ReactDOM from "react-dom/client";

import ApiProvider from "./providers/api";
import Router from "./routers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense>
      <ApiProvider>
        <Router />
      </ApiProvider>
    </Suspense>
  </React.StrictMode>
);
