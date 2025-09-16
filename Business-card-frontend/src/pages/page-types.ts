import { JSX } from "react";

export type PageComponent = () => JSX.Element;

export type PageConfig = {
  id: string;
  component: PageComponent;
  title: string;
};
