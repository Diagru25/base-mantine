import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "configs/configureStore";

import App from "pages/App/App";
import reportWebVitals from "./reportWebVitals";

const theme = {
  breakpoints: {
    xs: 500,
    sm: 800,
    md: 1600,
    lg: 1920,
    xl: 2000,
  },
  fontFamily: "Noto Sans, Roboto, sans-serif",
  fontFamilyMonospace: "Noto Sans, Roboto, sans-serif",
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);

reportWebVitals();
