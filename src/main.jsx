import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { store } from "./features/store";
import Layout from "./components/Layout";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Suspense } from "react";
import Main from "./pages/Main";
import "./index.css";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </Suspense>
);
