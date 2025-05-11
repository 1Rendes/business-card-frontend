import css from "./Chat.module.css";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const ChatButton = ({
  handleConnect,
  isFlipped,
}: {
  handleConnect: () => void;
  isFlipped: boolean;
}) => {
  return (
    <button
      onClick={handleConnect}
      className={`${css.chatButton} ${isFlipped ? css.chatButtonFlipped : ""}`}
    >
      <IoChatboxEllipsesOutline className={css.chatButtonIcon} />
    </button>
  );
};

export default ChatButton;
