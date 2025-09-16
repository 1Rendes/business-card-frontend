import { JSX } from "react";
import { NavigationPage } from "./Navigation";
import css from "./Footer.module.css";
import { useTranslation } from "react-i18next";

const Footer = ({
  onPageChange,
  activePage,
}: {
  onPageChange: (page: NavigationPage) => void;
  activePage: NavigationPage;
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={css.footer}>
      <button
        className={`${css.button} ${
          activePage === "impressum" ? css.active : ""
        }`}
        onClick={() => onPageChange("impressum")}
        type="button"
      >
        {t("footer.impressum")}
      </button>
      <button
        className={`${css.button} ${
          activePage === "datenschutz" ? css.active : ""
        }`}
        onClick={() => onPageChange("datenschutz")}
        type="button"
      >
        {t("footer.datenschutz")}
      </button>
    </div>
  );
};

export default Footer;
