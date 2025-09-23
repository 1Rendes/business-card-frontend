import { JSX } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../types/routes";
import css from "./404.module.css";
import footerCss from "../components/Footer.module.css";

export const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={css.container}>
      <div className={css.content}>
        <h1 className={css.title}>404</h1>
        <p className={css.message}>{t("404.notFound")}</p>
        <p className={css.description}>{t("404.description")}</p>
        <Link to={ROUTES.VISITENKARTE} className={footerCss.button}>
          {t("404.backToHome")}
        </Link>
      </div>
    </div>
  );
};