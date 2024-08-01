// Packages
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// Utils
import "./index.css";
import { store } from "@app/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
