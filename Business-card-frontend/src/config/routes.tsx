import { RouteConfig } from "../types/routes";
import VisitenkartePage from "../pages/VisitenkartePage";
import LebenslaufPage from "../pages/LebenslaufPage";
import AiChatPage from "../pages/AiChatPage";
import ImpressumPage from "../pages/ImpressumPage";
import DatenschutzPage from "../pages/DatenschutzPage";

export const routeConfig: RouteConfig[] = [
  {
    path: "/",
    component: VisitenkartePage,
    title: "Visitenkarte",
  },
  {
    path: "/ueber-mich",
    component: LebenslaufPage,
    title: "Über mich",
  },
  {
    path: "/ai-chat",
    component: AiChatPage,
    title: "AI Chat",
  },
  {
    path: "/impressum",
    component: ImpressumPage,
    title: "Impressum",
  },
  {
    path: "/datenschutz",
    component: DatenschutzPage,
    title: "Datenschutz",
  },
];
