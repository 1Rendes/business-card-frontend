import { useState, useRef, useEffect, FormEvent, JSX } from "react";
import css from "./Chat.module.css";
import ReactMarkdown from "react-markdown";
import clsx from "clsx";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const WEBSOCKET_URL = "ws://business-card-backend-uwr3.onrender.com/ws";

interface ChatMessage {
  content: string;
  type: string;
}

const Chat = ({
  isConnected,
  isChatVisible,
  handleConnect,
}: {
  isConnected: boolean;
  isChatVisible: boolean;
  handleConnect: () => void;
}): JSX.Element => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isWaitForAssistantAnswer, setIsWaitForAssistantAnswer] =
    useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const ws = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isConnected) return;
    ws.current = new WebSocket(WEBSOCKET_URL);
    ws.current.onmessage = (event: MessageEvent) => {
      const data: ChatMessage = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };
    ws.current.onclose = () => {
      setMessages((prev) => [
        ...prev,
        { content: "Disconnected", type: "system" },
      ]);
    };
    return () => {
      ws.current?.close();
    };
  }, [isConnected]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTo({
        top: messagesEndRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
    if (messages.length > 0 && messages[messages.length - 1].type === "user") {
      setIsWaitForAssistantAnswer(true);
    } else {
      setIsWaitForAssistantAnswer(false);
    }
  }, [messages]);

  const handleSend = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (
      ws.current &&
      ws.current.readyState === WebSocket.OPEN &&
      input.trim()
    ) {
      const message: ChatMessage = { type: "user", content: input };
      ws.current.send(JSON.stringify(message));
      setMessages((prev) => [...prev, message]);
      setInput("");
    }
  };

  return (
    <div
      className={`${css.chatContainer} ${
        isChatVisible ? css.chatContainerVisible : ""
      }`}
    >
      <button onClick={handleConnect} className={css.closeButton}>
        <IoCloseSharp className={css.closeIcon} />
      </button>

      <div className={css.chatMessages} ref={messagesEndRef}>
        {messages.map((msg, i) => (
          <div
            className={clsx(
              css.chatMessage,
              msg.type === "assistant"
                ? css.chatMessageAssistant
                : css.chatMessageUser
            )}
            key={i}
          >
            <b>{msg.type === "assistant" ? `${msg.type}:` : ""}</b>{" "}
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        ))}
        {isWaitForAssistantAnswer && <div className={css.typing} />}
      </div>
      <form onSubmit={handleSend} className={css.chatForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={css.chatInput}
        />
        <button type="submit" className={css.sendButton}>
          <IoIosSend className={css.sendIcon} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
