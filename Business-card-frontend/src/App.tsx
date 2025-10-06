import { JSX, useState, useEffect } from "react";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Footer from "./components/Footer";
import SwiperContainer from "./components/SwiperContainer";
import { NotFoundPage } from "./pages/404";
import { ROUTES } from "./types/routes";

type AppContentProps = {
  onSlideChange: (activeIndex: number) => void;
  activeSlideIndex: number;
};

const AppContent = ({ onSlideChange, activeSlideIndex }: AppContentProps): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathToIndexMap: Record<string, number> = {
      [ROUTES.VISITENKARTE]: 0,
      [ROUTES.UEBER_MICH]: 1,
      [ROUTES.AI_CHAT]: 2,
    };

    const currentIndex = pathToIndexMap[location.pathname];
    if (currentIndex !== undefined && currentIndex !== activeSlideIndex) {
      onSlideChange(currentIndex);
    }
  }, [location.pathname, activeSlideIndex, onSlideChange]);

  const handleSlideChange = (newIndex: number): void => {
    const indexToPathMap: Record<number, string> = {
      0: ROUTES.VISITENKARTE,
      1: ROUTES.UEBER_MICH,
      2: ROUTES.AI_CHAT,
    };

    const newPath = indexToPathMap[newIndex];
    if (newPath && newPath !== location.pathname) {
      navigate(newPath, { replace: true });
    }
  };

  const isNotFoundPage = !Object.values(ROUTES).includes(location.pathname as any);

  if (isNotFoundPage) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Navigation />
      <SwiperContainer 
        onSlideChange={handleSlideChange}
        activeSlideIndex={activeSlideIndex}
      />
      <Footer />
    </>
  );
};

const App = (): JSX.Element => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const handleSlideChange = (newIndex: number): void => {
    setActiveSlideIndex(newIndex);
  };

  return (
    <BrowserRouter>
      <AppContent 
        onSlideChange={handleSlideChange}
        activeSlideIndex={activeSlideIndex}
      />
    </BrowserRouter>
  );
};

export default App;
