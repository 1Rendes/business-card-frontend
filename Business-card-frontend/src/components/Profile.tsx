import { useState, useRef, useEffect, JSX } from "react";
import css from "./Profile.module.css";
import AccordionListItem from "./AccordionListItem";
import clsx from "clsx";
import profile from "../images/profile.png";
import { useTranslation } from "react-i18next";

const Profile = (): JSX.Element => {
  const { t } = useTranslation();
  const profileRef = useRef<HTMLDivElement>(null);

  const [accordionStates, setAccordionStates] = useState({
    first: "closed",
    second: "closed",
    third: "closed",
    fourth: "closed",
    fifth: "closed",
    sixth: "closed",
  });

  useEffect(() => {
    const setBodyHeight = (): void => {
      if (profileRef.current) {
        document.body.style.height = `${
          profileRef.current.offsetHeight + 450
        }px`;
      }
    };
    setBodyHeight();
    window.addEventListener("resize", setBodyHeight);
    return () => {
      window.removeEventListener("resize", setBodyHeight);
      document.body.style.height = ""; // сброс при размонтировании
    };
  }, []);

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
          <table className={css.table}>
            <tbody>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>{t("aboutMe.mainStack")}</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>
                    JavaScript, TypeScript, React, Next.js, Node.js, MongoDB
                  </p>
                </td>
              </tr>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>{t("aboutMe.frontend")}</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>React, Next.js, TypeScript</p>
                </td>
              </tr>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>{t("aboutMe.backend")}</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>Node.js, Fastify, Express,MongoDB</p>
                </td>
              </tr>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>{t("aboutMe.architecture")}</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>Full-scale apps, landing pages, microservices</p>
                </td>
              </tr>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>{t("aboutMe.aiFrameworks")}</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>LangChain, LiveKit</p>
                </td>
              </tr>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>{t("aboutMe.cachingPerformance")}</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>Redis</p>
                </td>
              </tr>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>{t("aboutMe.developmentPractices")}</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>
                    Scalable architecture, maintainability, team collaboration
                  </p>
                </td>
              </tr>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>{t("aboutMe.areasOfInterest")}</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>
                    AI impact on development workflows and real-world
                    applications
                  </p>
                </td>
              </tr>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>{t("aboutMe.education")}</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <a
                    target="blank"
                    className={css.projectItem}
                    href="https://drive.google.com/file/d/11SHbgIBWBGn26p5FSf4-vylxo1p4rRR9/view?usp=drive_link00000000000/view?usp=sharing"
                  >
                    {t("aboutMe.educationLink")}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <h3>{t("aboutMe.projectsFromEducation")}</h3>
          <ul className={css.projectsList}>
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
