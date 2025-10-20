import styles from "./Navigation.module.css";
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../types/routes";

type NavigationItem = {
  path: string;
  label: string;
  index: number;
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
  const navigate = useNavigate();

  const handleLanguageChange = (languageCode: Language): void => {
    i18n.changeLanguage(languageCode);
  };

  const handleNavigationClick = (path: string): void => {
    navigate(path);
  };

  const navigationItems: NavigationItem[] = [
    { path: ROUTES.VISITENKARTE, label: t("navigation.visitenkarte"), index: 0 },
    { path: ROUTES.UEBER_MICH, label: t("navigation.ueberMich"), index: 1 },
    { path: ROUTES.AI_CHAT, label: t("navigation.aiChat"), index: 2 },
  ];

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.navButtons}>
          {navigationItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigationClick(item.path)}
              className={`${styles.navButton} ${
                location.pathname === item.path ? styles.active : ""
              }`}
              type="button"
            >
              {item.label}
            </button>
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

