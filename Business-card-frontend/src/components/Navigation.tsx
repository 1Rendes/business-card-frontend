import styles from "./Navigation.module.css";
import { JSX } from "react";
import { useTranslation } from "react-i18next";

type NavigationPage =
  | "visitenkarte"
  | "lebenslauf"
  | "ai-chat"
  | "impressum"
  | "datenschutz";

type NavigationItem = {
  id: NavigationPage;
  label: string;
};

type NavigationProps = {
  activePage: NavigationPage;
  onPageChange: (page: NavigationPage) => void;
};

type Language = "de" | "en" | "ua";

const languages: { code: Language; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "ua", label: "UA" },
];

export const Navigation = ({
  activePage,
  onPageChange,
}: NavigationProps): JSX.Element => {
  const { t, i18n } = useTranslation();

  const handleNavClick = (pageId: NavigationPage): void => {
    onPageChange(pageId);
  };

  const handleLanguageChange = (languageCode: Language): void => {
    i18n.changeLanguage(languageCode);
  };

  const navigationItems: NavigationItem[] = [
    { id: "visitenkarte", label: t("navigation.visitenkarte") },
    { id: "lebenslauf", label: t("navigation.lebenslauf") },
    { id: "ai-chat", label: t("navigation.aiChat") },
  ];

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.navButtons}>
          {navigationItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navButton} ${
                activePage === item.id ? styles.active : ""
              }`}
              onClick={() => handleNavClick(item.id)}
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

export type { NavigationPage };
