import { useState, useRef, JSX } from "react";
import css from "./Profile.module.css";
import AccordionListItem from "./AccordionListItem";
import clsx from "clsx";
import profile from "../images/profile.webp";
import { useTranslation } from "react-i18next";
import ProjectSwiper from "./ProjectSwiper";

const Profile = (): JSX.Element => {
  const { t } = useTranslation();
  const profileRef = useRef<HTMLDivElement>(null);

  const [accordionStates, setAccordionStates] = useState({
    first: "opened",
    second: "closed",
    third: "closed",
    fourth: "closed",
    fifth: "closed",
    sixth: "closed",
    seventh: "closed",
  });

  return (
    <div ref={profileRef} className={clsx(css.profile)}>
      <div className={css.firstBlock}>
        <div className={css.nameBlock}>
          <div className={css.nameBlockTitle}>
          <div className={css.mainDescriptionBlock}>
            <div className={css.mainDescriptionBlockTitle}>
              <h1>Volodymyr Solonin</h1>
              <p className={css.mainDescriptionBlockDescriptionFirst}>
                {t("aboutMe.intro.firstPart")} <span className={css.mainDescriptionBlockDescriptionSpan}>{t("aboutMe.intro.highlight")}</span> {t("aboutMe.intro.secondPart")}
              </p>
              <p className={css.mainDescriptionBlockDescriptionSecond}>{t("aboutMe.introDescription")}</p>
            </div>
            <img className={css.profilePhoto} src={profile} alt="profile" />
          </div>
          <div className={css.profileBlockTitle}>
            <div className={css.profileBlockTitleImage}></div>
            <div className={css.profileBlockTitleText}>
            <p className={css.mainDescriptionBlockDescriptionFirst}>{t("aboutMe.work.firstPart")} <span className={css.mainDescriptionBlockDescriptionSpan}>{t("aboutMe.work.highlight")}</span></p>
            <p className={css.mainDescriptionBlockDescriptionSecond}>{t("aboutMe.workDescription")}</p>
            </div>
          </div>
          </div>
          <div className={css.profileBlock}>
          <h3>{t("aboutMe.coreCompetencies")}</h3>
          <ul className={css.itemsList}>
            <AccordionListItem
              name={t("aboutMe.mainStack.name")}
              order="first"
              isList={false}
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription={t("aboutMe.mainStack.description")}
            />
            <AccordionListItem
              name={t("aboutMe.expertise")}
              order="second"
              isList={false}
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription={t("aboutMe.expertiseText")}
            />
            <AccordionListItem
              name={t("aboutMe.education")}
              order="third"
              isList={true}
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription=""
            />
          </ul>
          </div>
          <div className={css.profileBlock}>
          <h3>{t("aboutMe.projectsFromEducation")}</h3>
          <ProjectSwiper />
          </div>
          <h3>{t("aboutMe.contactInformation")}</h3>
          <div className={css.contactInfo}>
            <a href="tel:+491717494053" className={css.address}>
              <b>{t("aboutMe.mobile")}</b> +49 (0)171 749 4053
            </a>
            <a href="mailto:mail@volo.rocks" className={css.address}>
              <b>{t("aboutMe.email")}</b> mail@volo.rocks
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
