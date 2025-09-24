import { JSX, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../types/routes";
import css from "./404.module.css";
import footerCss from "../components/Footer.module.css";

const REDIRECT_DELAY_SECONDS: number = 5;

export const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState<number>(REDIRECT_DELAY_SECONDS);

  useEffect(() => {
    const timer: number = setInterval(() => {
      setCountdown((prevCountdown: number) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate(ROUTES.VISITENKARTE);
    }
  }, [countdown, navigate]);

  return (
    <div className={css.container}>
      <div className={css.content}>
        <h1 className={css.title}>404</h1>
        <p className={css.message}>{t("404.notFound")}</p>
        <p className={css.description}>{t("404.description")}</p>
        <p className={css.redirectMessage}>
          {t("404.redirectMessage", { seconds: countdown })}
        </p>
        <Link to={ROUTES.VISITENKARTE} className={footerCss.button}>
          {t("404.backToHome")}
        </Link>
      </div>
    </div>
  );
};