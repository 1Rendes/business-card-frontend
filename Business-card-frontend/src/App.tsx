import { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Footer from "./components/Footer";
import { routeConfig } from "./config/routes";
import { NotFoundPage } from "./pages/404";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {routeConfig.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
