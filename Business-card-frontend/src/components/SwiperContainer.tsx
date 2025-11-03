import { JSX, useEffect, useState } from "react";
import VisitenkartePage from "../pages/VisitenkartePage";
import LebenslaufPage from "../pages/LebenslaufPage";
import AiChatPage from "../pages/AiChatPage";
import ImpressumPage from "../pages/ImpressumPage";
import DatenschutzPage from "../pages/DatenschutzPage";
import styles from "./SwiperContainer.module.css";

type SwiperContainerProps = {
  onSlideChange: (activeIndex: number) => void;
  activeSlideIndex: number;
};

type PageComponent = () => JSX.Element;

type AnimationState = "idle" | "exiting" | "entering";

const SwiperContainer = ({
  activeSlideIndex,
}: SwiperContainerProps): JSX.Element => {
  const [animationState, setAnimationState] = useState<AnimationState>("idle");
  const [currentPageIndex, setCurrentPageIndex] =
    useState<number>(activeSlideIndex);
  const [nextPageIndex, setNextPageIndex] = useState<number>(activeSlideIndex);

  const pages: PageComponent[] = [
    VisitenkartePage,
    LebenslaufPage,
    AiChatPage,
    ImpressumPage,
    DatenschutzPage,
  ];

  useEffect(() => {
    if (currentPageIndex !== activeSlideIndex) {
      setNextPageIndex(activeSlideIndex);
      setAnimationState("exiting");
    }
  }, [activeSlideIndex, currentPageIndex]);

  useEffect(() => {
    if (animationState === "exiting") {
      // Анимация уезда старой страницы
      const timer = setTimeout(() => {
        setCurrentPageIndex(nextPageIndex);
        setAnimationState("entering");
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [animationState, nextPageIndex]);

  useEffect(() => {
    if (animationState === "entering") {
      // Анимация приезда новой страницы
      const timer = setTimeout(() => {
        setAnimationState("idle");
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [animationState]);

  const CurrentPageComponent = pages[currentPageIndex];

  return (
    <div className={`${styles.swiperWrapper} ${styles[animationState]}`}>
      <div className={styles.pageContainer}>
        <CurrentPageComponent />
      </div>
    </div>
  );
};

export default SwiperContainer;
