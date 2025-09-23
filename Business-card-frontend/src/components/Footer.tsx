import { JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../types/routes";

const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className={css.footer}>
      <Link
        to={ROUTES.IMPRESSUM}
        className={`${css.button} ${
          location.pathname === ROUTES.IMPRESSUM ? css.active : ""
        }`}
      >
        {t("footer.impressum")}
      </Link>
      <Link
        to={ROUTES.DATENSCHUTZ}
        className={`${css.button} ${
          location.pathname === ROUTES.DATENSCHUTZ ? css.active : ""
        }`}
      >
        {t("footer.datenschutz")}
      </Link>
    </div>
  );
};

export default Footer;
