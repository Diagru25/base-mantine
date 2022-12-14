import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "configs/configureStore";

import App from "pages/App/App";
import reportWebVitals from "./reportWebVitals";

const theme = {
  breakpoints: {
    xs: 576,
    sm: 768,
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
  //   <React.StrictMode>
  <MantineProvider withGlobalStyles theme={theme}>
    <NotificationsProvider
      position="top-right"
      zIndex={2077}
      containerWidth={350}
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </NotificationsProvider>
  </MantineProvider>
  //   </React.StrictMode>
);

reportWebVitals();
