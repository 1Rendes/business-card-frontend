import { IoCloseSharp } from "react-icons/io5";
import WebStudio from "../images/webStudioPrev.webp";
import Watchcharm from "../images/watchcharmPrev.webp";
import Portfolio from "../images/portfolioPrev.webp";
import MovieObserver from "../images/movieObserverPrev.webp";
import AquaTrack from "../images/aquaTrackPrev.webp";
import TravelTrucks from "../images/travelTrucksPrev.webp";
import PersonalVisitenkarte from "../images/personalVisitenkartePrev.webp";
import { useTranslation } from "react-i18next";
import css from "./ProjectCard.module.css";

const ProjectCard = ({ order }: { order: string }) => {
  const { t } = useTranslation();

  const getProjectData = () => {
    const projectKey = order as keyof typeof projectKeys;
    const projectName = projectKeys[projectKey];
    const goal = t(`projectCard.projects.${projectName}.goal`);
    const role = t(`projectCard.projects.${projectName}.role`);
    const experience = t(`projectCard.projects.${projectName}.experience`, {
      returnObjects: true,
    });
    return {
      name: projectName,
      goal: goal,
      role: role,
      experience: Array.isArray(experience) ? experience : [],
    };
  };

  const projectKeys = {
    first: "webStudio",
    second: "watchcharm",
    third: "portfolio",
    fourth: "movieObserver",
    fifth: "aquaTrack",
    sixth: "travelTrucks",
    seventh: "personalVisitenkarte",
  } as const;

  const cardData = {
    first: {
      name: "WebStudio",
      link: "https://1rendes.github.io/goit-markup-hw-06/",
      imageLink: WebStudio,
      technologies: "HTML, CSS",
    },
    second: {
      name: "Watchcharm",
      link: "https://1rendes.github.io/Project-SuperCode/",
      imageLink: Watchcharm,
      technologies: "HTML, CSS, JavaScript",
    },
    third: {
      name: "Portfolio",
      link: "https://1rendes.github.io/Project-SuperScript/",
      imageLink: Portfolio,
      technologies: "HTML, CSS, JavaScript",
    },
    fourth: {
      name: "Movie-observer",
      link: "https://movie-observer.vercel.app/",
      imageLink: MovieObserver,
      technologies: "React.js, React Router, React Hooks, React Context",
    },
    fifth: {
      name: "AquaTrack",
      link: "https://aqua-track-duna-front.vercel.app/",
      imageLink: AquaTrack,
      technologies:
        "React.js, Node.js, Express, MongoDB, Mongoose, JSON Web Token, React Hook Form, React Router, React Hooks, React Context",
    },
    sixth: {
      name: "Travel-trucks",
      link: "https://travel-trucks-test-task.vercel.app/",
      imageLink: TravelTrucks,
      technologies: "React.js, React Router, React Hooks, React Context",
    },
    seventh: {
      name: "Persönliche Visitenkarte",
      link: "#",
      imageLink: PersonalVisitenkarte,
      technologies:
        "React.js, Vite, TypeScript, Node.js, Fastify, Pinecone, LiveKit, OpenAI",
    },
  };
  return (
    //   <div className={css.modal}>
    //     <ReactModal
    //       overlayClassName={{
    //         base: css.backdrop,
    //         afterOpen: css.backdropAfterOpen,
    //         beforeClose: css.backdropBeforeClose,
    //       }}
    //       className={{
    //         base: css.modal,
    //         afterOpen: css.modalAfterOpen,
    //         beforeClose: css.modalBeforeClose,
    //       }}
    //       isOpen={isOpen}
    //       onRequestClose={handleClose}
    //       closeTimeoutMS={300}
    //       ariaHideApp={false}
    //     >
    //       <button
    //         onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
    //           event.stopPropagation();
    //           handleClose();
    //         }}
    //         className={css.closeButton}
    //       >
    //         <IoCloseSharp className={css.closeIcon} />
    //       </button>
    <div
      className={css.projectCard}
      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
      }}
    >
      <div className={css.projectCardTextContent}>
        <h2 className={css.projectCardName}>
          {cardData[order as keyof typeof cardData].name}
        </h2>
        <p>
          <b>{t("projectCard.role")} </b>
          {getProjectData().role}
        </p>
        <p>
          <b>{t("projectCard.goal")} </b>
          {getProjectData().goal}
        </p>
        <p>
          <b>{t("projectCard.experience")}</b>
        </p>
        <ul className={css.experienceList}>
          {getProjectData().experience.map((item, index) => (
            <li className={css.experienceItem} key={index}>
              {item}
            </li>
          ))}
        </ul>
        <p>
          <b>{t("projectCard.technologies")}</b>
        </p>
        <p>{cardData[order as keyof typeof cardData].technologies}</p>
      </div>
      <div className={css.projectCardPreviewContainer}>
        <p>
          <b>{t("projectCard.linkToProject")}</b>
        </p>
        <a
          className={css.projectCardLink}
          href={cardData[order as keyof typeof cardData].link}
          target="blank"
          onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation();
          }}
        >
          <img
            src={cardData[order as keyof typeof cardData].imageLink}
            alt={cardData[order as keyof typeof cardData].name}
            className={css.projectCardPreview}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
