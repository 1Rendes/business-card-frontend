import { JSX } from "react";
import css from "./BasicCard.module.css";
import profile from "../images/profile.png";
import { useTranslation } from "react-i18next";

const BasicCard = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={css.basicCard}>
      <div className={css.whiteback}>
        <div className={css.imageSection}>
          <img className={css.profileImage} src={profile} alt="profile" />
        </div>
        <div className={css.contentSection}>
          <p className={css.name}>Volodymyr Solonin</p>
          <p className={css.profession}>{t("basicCard.profession")}</p>
          <div className={css.addressBlock}>
            <address className={css.address}>
              {t("basicCard.address.street")}
            </address>
            <address className={css.address}>
              {t("basicCard.address.city")}
            </address>
            <a href="tel:+491717494053" className={css.address}>
              {t("basicCard.address.mobile")}
            </a>
            <a href="mailto:mail@volo.rocks" className={css.address}>
              {t("basicCard.address.email")}
            </a>
            <a
              className={css.addressLink}
              target="blank"
              href="https://github.com/1Rendes"
            >
              {t("basicCard.address.github")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
