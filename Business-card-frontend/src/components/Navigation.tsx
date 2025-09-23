import styles from "./Navigation.module.css";
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../types/routes";

type NavigationItem = {
  path: string;
  label: string;
};

type Language = "de" | "en" | "ua";

const languages: { code: Language; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "ua", label: "UA" },
];

export const Navigation = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const handleLanguageChange = (languageCode: Language): void => {
    i18n.changeLanguage(languageCode);
  };

  const navigationItems: NavigationItem[] = [
    { path: ROUTES.VISITENKARTE, label: t("navigation.visitenkarte") },
    { path: ROUTES.UEBER_MICH, label: t("navigation.ueberMich") },
    { path: ROUTES.AI_CHAT, label: t("navigation.aiChat") },
  ];

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.navButtons}>
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navButton} ${
                location.pathname === item.path ? styles.active : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className={styles.languageButtons}>
          {languages.map((language) => (
            <button
              key={language.code}
              className={`${styles.languageButton} ${
                i18n.language === language.code ? styles.languageActive : ""
              }`}
              onClick={() => handleLanguageChange(language.code)}
              type="button"
            >
              {language.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

