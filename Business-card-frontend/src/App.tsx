import { useState, useRef, useLayoutEffect } from "react";
import BasicCard from "./components/BasicCard";
import Profile from "./components/Profile";
import css from "./components/FlipCard.module.css";

function App() {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState<number>(0);

  useLayoutEffect(() => {
    const frontWidth = frontRef.current?.offsetWidth || 0;
    const backWidth = backRef.current?.offsetWidth || 0;
    setCardWidth(Math.max(frontWidth, backWidth));
  }, [isFlipped]);

  const handleFlip = (): void => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className={css.flipCardContainer} style={{ width: cardWidth }}>
      <div className={`${css.flipCardInner} ${isFlipped ? css.flipped : ""}`}>
        <div className={css.flipCardFront} ref={frontRef}>
          <BasicCard handleOpenCards={handleFlip} />
        </div>
        <div className={css.flipCardBack} ref={backRef}>
          <Profile handleFlip={handleFlip} />
        </div>
      </div>
    </div>
  );
}

export default App;
