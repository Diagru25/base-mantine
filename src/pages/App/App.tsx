import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import publicRoutes from "routes/route.public";
import authRoutes from "routes/route.auth";

import ErrorBoundary from "components/ErrorBoundary";
import MainLayout from "components/Layout/MainLayout";
import NotFoundPage from "components/NotFoundPage";

const App: FC = () => {
  return (
    <ErrorBoundary>
      <Routes>
        {publicRoutes.map(({ path, element }) => {
          const Element: FC = element;
          return (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={null}>
                  <Element />
                </Suspense>
              }
            />
          );
        })}
        <Route element={<MainLayout />}>
          {authRoutes.map(({ path, element }) => {
            const Element: FC = element;
            return (
              <Route
                key={path}
                path={path}
                element={
                  <Suspense fallback={null}>
                    <Element />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
