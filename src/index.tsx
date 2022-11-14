import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <App />
      {/* <Routes>
        <Route element={<App />} path={"/*"} />
      </Routes> */}
    </Router>
  </React.StrictMode>
);