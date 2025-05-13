import { useState, useRef, useLayoutEffect } from "react";
import BasicCard from "./components/BasicCard";
import Profile from "./components/Profile";
import css from "./components/FlipCard.module.css";
import Microphone from "./components/Microphone";
import Chat from "./components/Chat";
import ChatButton from "./components/ChatButton";

function App() {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState<number>(0);
  const [isChatVisible, setIsChatVisible] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);

  useLayoutEffect(() => {
    const frontWidth = frontRef.current?.offsetWidth || 0;
    const backWidth = backRef.current?.offsetWidth || 0;
    setCardWidth(Math.max(frontWidth, backWidth));
  }, [isFlipped]);

  const handleConnect = (): void => {
    setIsConnected(true);
    if (isChatVisible) {
      setIsChatVisible(false);
    } else {
      setIsChatVisible(true);
    }
  };

  const handleFlip = (): void => {
    setIsFlipped((prev) => !prev);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>): void => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 60) {
      // 60px — минимальная длина свайпа
      handleFlip();
    }
    touchStartX.current = null;
  };

  return (
    <>
      <div
        className={css.flipCardContainer}
        style={{ width: cardWidth }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`${css.flipCardInner} ${isFlipped ? css.flipped : ""}`}>
          <div className={css.flipCardFront} ref={frontRef}>
            <BasicCard handleOpenCards={handleFlip} />
          </div>
          <div className={css.flipCardBack} ref={backRef}>
            <Profile handleFlip={handleFlip} />
          </div>
        </div>
        <ChatButton handleConnect={handleConnect} isFlipped={isFlipped} />
        <Microphone isFlipped={isFlipped} />
      </div>
      <Chat
        isConnected={isConnected}
        isChatVisible={isChatVisible}
        handleConnect={handleConnect}
      />
    </>
  );
}

export default App;
