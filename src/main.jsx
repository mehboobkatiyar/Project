import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./stores/store";
import Login from "./auth/Login.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Charts from "./Pages/Charts.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route
            path="/charts"
            element={
              <Layout>
                <ProtectedRoute>
                  <Charts />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </StrictMode>
  </Provider>
);
