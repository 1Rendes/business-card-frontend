import { JSX } from "react";

export type RoutePath = 
  | "/"
  | "/ueber-mich"
  | "/ai-chat"
  | "/impressum"
  | "/datenschutz";

export type RouteConfig = {
  path: RoutePath;
  component: () => JSX.Element;
  title: string;
};

export const ROUTES: Record<string, RoutePath> = {
  VISITENKARTE: "/",
  UEBER_MICH: "/ueber-mich",
  AI_CHAT: "/ai-chat",
  IMPRESSUM: "/impressum",
  DATENSCHUTZ: "/datenschutz",
} as const;
