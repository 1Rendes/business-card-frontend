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
          <div className={css.mainDescriptionBlock}>
            <div className={css.mainDescriptionBlockTitle}>
              <h1>Volodymyr Solonin</h1>
              <p>{t("aboutMe.description")}</p>
            </div>
            <img className={css.profilePhoto} src={profile} alt="profile" />
          </div>
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
          <h3>{t("aboutMe.projectsFromEducation")}</h3>
          <ProjectSwiper />
          {/* <ul className={css.projectsList}>
            <AccordionListItem
              href="https://1rendes.github.io/goit-markup-hw-06/"
              name={t("aboutMe.projects.webStudio.name")}
              order="first"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription={t("aboutMe.projects.webStudio.description")}
            />
            <AccordionListItem
              href="https://1rendes.github.io/Project-SuperCode/"
              name={t("aboutMe.projects.watchcharm.name")}
              order="second"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription={t("aboutMe.projects.watchcharm.description")}
            />
            <AccordionListItem
              href="https://1rendes.github.io/Project-SuperScript/"
              name={t("aboutMe.projects.portfolio.name")}
              order="third"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription={t("aboutMe.projects.portfolio.description")}
            />
            <AccordionListItem
              href="https://movie-observer.vercel.app/"
              name={t("aboutMe.projects.movieObserver.name")}
              order="fourth"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription={t("aboutMe.projects.movieObserver.description")}
            />
            <AccordionListItem
              href="https://aqua-track-duna-front.vercel.app/"
              name={t("aboutMe.projects.aquaTrack.name")}
              order="fifth"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription={t("aboutMe.projects.aquaTrack.description")}
            />
            <AccordionListItem
              href="https://travel-trucks-test-task.vercel.app/"
              name={t("aboutMe.projects.travelTrucks.name")}
              order="sixth"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription={t("aboutMe.projects.travelTrucks.description")}
            />
          </ul> */}
          <h3>{t("aboutMe.otherProjects")}</h3>
          <ul className={css.projectsList}>
            <AccordionListItem
              name={t("aboutMe.projects.personalVisitenkarte.name")}
              order="seventh"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription={t(
                "aboutMe.projects.personalVisitenkarte.description"
              )}
            />
          </ul>
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
