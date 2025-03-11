import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

// For GitHub Pages, we need to use /PersonalWebsite as the basename in production
// but in development we use / as the basename
const basename = process.env.NODE_ENV === 'development' ? '/' : '/PersonalWebsite';

// Handle /PersonalWebsite route in development mode
const AppWrapper = () => {
  useEffect(() => {
    // Redirect /PersonalWebsite to / in development mode
    if (process.env.NODE_ENV === 'development' && 
        window.location.pathname === '/PersonalWebsite') {
      window.location.replace('/');
    }
  }, []);

  return <App />;
};

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        {process.env.NODE_ENV === 'development' && (
          <Route path="/PersonalWebsite" element={<Navigate to="/" replace />} />
        )}
        <Route path="/*" element={<AppWrapper />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
console.log('Current environment:', process.env.NODE_ENV);
console.log('Using basename:', basename);