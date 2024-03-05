import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { App } from "./App.tsx";
// import { store } from "./store";

import "./index.css";
import { App2 } from "./App2";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App />
    </Provider> */}

    <QueryClientProvider client={queryClient}>
      <App2 />
    </QueryClientProvider>
  </React.StrictMode>
);
