import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { CookiesProvider } from "react-cookie";
import "./index.css";

/**
 * This is the entry point of the React application, where the App component is rendered
 * and any global libraries or styles are imported.
 */
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);

/**
 * Web Vitals is an initiative by Google to provide unified guidance for quality signals
 * that are essential to delivering a great user experience on the web. The Web Vitals focus on three key aspects of user experience: loading performance, interactivity, and visual stability.
 * reportWebVitals is a function that can be used to measure and log these performance metrics
 * to the console or send them to an analytics endpoint.
 *
 * Learn more: https://web.dev/vitals/
 */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
