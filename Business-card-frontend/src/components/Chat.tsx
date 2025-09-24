import { useState, useRef, useEffect, FormEvent, JSX } from "react";
import css from "./Chat.module.css";
import ReactMarkdown from "react-markdown";
import clsx from "clsx";
import { IoIosSend } from "react-icons/io";
import { useTranslation } from "react-i18next";

const WEBSOCKET_URL =
  "wss://business-card-backend-uwr3.onrender.com/ws?language=";
// const WEBSOCKET_URL = "ws://localhost:3001/ws?language=";

interface ChatMessage {
  content: string;
  type: string;
}

const Chat = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isWaitForAssistantAnswer, setIsWaitForAssistantAnswer] =
    useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const ws = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    setIsConnected(true);
    if (!isConnected) return;
    ws.current = new WebSocket(WEBSOCKET_URL + i18n.language);
    ws.current.onmessage = (event: MessageEvent) => {
      const data: ChatMessage = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };
    ws.current.onclose = () => {   
      if (messages.length > 1) {
        setMessages((prev) => [
          ...prev,
          { content: t("chat.disconnected"), type: "system" },
        ]);
      }
    };
    return () => {
      ws.current?.close();
      setIsConnected(false);
      setMessages([]);  
    };
  }, [isConnected, i18n.language]);

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
    <div className={`${css.chatContainer} ${css.chatContainerVisible}`}>
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
            <b>{msg.type === "assistant" ? `${t("chat.assistant")}:` : ""}</b>
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
          placeholder={t("chat.placeholder")}
        />
        <button type="submit" className={css.sendButton}>
          <IoIosSend className={css.sendIcon} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
