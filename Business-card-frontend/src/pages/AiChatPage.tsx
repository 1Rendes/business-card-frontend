import { JSX, useState } from "react";
import Chat from "../components/Chat";
import Microphone from "../components/Microphone";
import css from "./AiChatPage.module.css";
import cssMicrophone from "../components/Microphone.module.css";

const AiChatPage = (): JSX.Element => {
  const [isChatChosen, setIsChatChosen] = useState<boolean>(true);
  return (
    <div className={css.aiChatPage}>
      <div className={css.chatButtonsPanel}></div>
      <div
        className={
          isChatChosen ? css.chatScaleContainerOpen : css.chatScaleContainer
        }
        onClick={() => setIsChatChosen(true)}
      >
        <Chat />
      </div>
      <div
        className={
          isChatChosen
            ? cssMicrophone.microphoneScaleContainer
            : cssMicrophone.microphoneScaleContainerOpen
        }
        onClick={() => setIsChatChosen(false)}
      >
        <Microphone isChatChoosen={isChatChosen} />
      </div>
    </div>
  );
};

export default AiChatPage;
