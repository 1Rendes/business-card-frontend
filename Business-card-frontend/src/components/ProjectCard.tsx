import ReactModal from "react-modal";
import css from "./ProjectCard.module.css";
import { IoCloseSharp } from "react-icons/io5";
import WebStudio from "../images/webStudioPrev.webp";
import Watchcharm from "../images/watchcharmPrev.webp";
import Portfolio from "../images/portfolioPrev.webp";
import MovieObserver from "../images/movieObserverPrev.webp";
import AquaTrack from "../images/aquaTrackPrev.webp";
import TravelTrucks from "../images/travelTrucksPrev.webp";

const ProjectCard = ({
  isOpen,
  order,
  handleClose,
}: {
  isOpen: boolean;
  order: string;
  handleClose: () => void;
}) => {
  const cardData = {
    first: {
      name: "WebStudio",
      link: "https://1rendes.github.io/goit-markup-hw-06/",
      goal: "To master the methods of HTML typesetting in practice and to learn how to use CSS, the first acquaintance with adaptive typesetting",
      role: "Developer",
      experienceList: [
        "Learned to use HTML tags for their intended purpose",
        "Understand the principles of CSS",
        "Understand how DOM works, decorative elements, and forms",
        "Discovered how responsive layout works",
      ],
      imageLink: WebStudio,
      technologies: "HTML, CSS",
    },
    second: {
      name: "Watchcharm",
      link: "https://1rendes.github.io/Project-SuperCode/",
      role: "Developer, team leader",
      goal: "Learn to work in a team with strangers on a shared project within a limited timeframe. Participate as a team leader. Put HTML, CSS, and JavaScript into practice.",
      experienceList: [
        "Learned how to properly distribute tasks among team members over time",
        "Consolidated HTML and CSS knowledge by completing a task in a limited time",
        "Presented the project to the client",
      ],
      imageLink: Watchcharm,
      technologies: "HTML, CSS, JavaScript",
    },
    third: {
      name: "Portfolio",
      link: "https://1rendes.github.io/Project-SuperScript/",
      role: "Developer, team leader",
      goal: "Improve skills in working in a development team, consolidate Java Script knowledge, complete the project within a limited timeframe",
      experienceList: [
        "Learned to work with SASS, use and configure various Java script libraries",
        "Interact with colleagues to solve problems, negotiate, and reach compromises using a shadow solution",
        "Improved skills in working with the Git workflow",
      ],
      imageLink: Portfolio,
      technologies: "HTML, CSS, JavaScript",
    },
    fourth: {
      name: "Movie-observer",
      link: "https://movie-observer.vercel.app/",
      role: "Developer",
      goal: "To test knowledge of React.js in practice and to improve skills in developing front-end applications",
      experienceList: [
        "Improved practical skills in React.js",
        "Working with various front-end libraries, practicing techniques for working with pagination, video players, and back-end interactions",
        "Various techniques were used to implement the intended design, which provided considerable experience",
      ],
      imageLink: MovieObserver,
      technologies: "React.js, React Router, React Hooks, React Context",
    },
    fifth: {
      name: "AquaTrack",
      link: "https://aqua-track-duna-front.vercel.app/",
      role: "Developer, team leader",
      goal: "Improve skills in Node.js, React.js and teamwork in a limited timeframe",
      experienceList: [
        "Improved skills in designing a Full-Stack application",
        "Optimized work with user data",
        "Improved teamwork skills",
      ],
      imageLink: AquaTrack,
      technologies:
        "React.js, Node.js, Express, MongoDB, Mongoose, JSON Web Token, React Hook Form, React Router, React Hooks, React Context",
    },
    sixth: {
      name: "Travel-trucks",
      link: "https://travel-trucks-test-task.vercel.app/",
      role: "Developer",
      goal: "Test knowledge of React.js in practice and to improve skills in developing front-end applications",
      experienceList: [
        "Improved practical skills in React.js",
        "Working with various front-end libraries, practicing techniques for working with pagination, video players, and back-end interactions",
        "Various techniques were used to implement the intended design, which provided considerable experience",
      ],
      imageLink: TravelTrucks,
      technologies: "React.js, React Router, React Hooks, React Context",
    },
  };
  ReactModal.setAppElement("#root");
  return (
    <div className={css.modal}>
      <ReactModal
        overlayClassName={{
          base: css.backdrop,
          afterOpen: css.backdropAfterOpen,
          beforeClose: css.backdropBeforeClose,
        }}
        className={{
          base: css.modal,
          afterOpen: css.modalAfterOpen,
          beforeClose: css.modalBeforeClose,
        }}
        isOpen={isOpen}
        onRequestClose={handleClose}
        closeTimeoutMS={300}
        ariaHideApp={false}
      >
        <button onClick={handleClose} className={css.closeButton}>
          <IoCloseSharp className={css.closeIcon} />
        </button>
        <div className={css.projectCard}>
          <div className={css.projectCardTextContent}>
            <h2 className={css.projectCardName}>
              {cardData[order as keyof typeof cardData].name}
            </h2>
            <p>
              <b>Role: </b>
              {cardData[order as keyof typeof cardData].role}
            </p>
            <p>
              <b>Goal: </b>
              {cardData[order as keyof typeof cardData].goal}
            </p>
            <p>
              <b>Experience:</b>
            </p>
            <ul className={css.experienceList}>
              {cardData[order as keyof typeof cardData].experienceList.map(
                (item, index) => (
                  <li className={css.experienceItem} key={index}>
                    {item}
                  </li>
                )
              )}
            </ul>
            <p>
              <b>Technologies:</b>
            </p>
            <p>{cardData[order as keyof typeof cardData].technologies}</p>
          </div>
          <div className={css.projectCardPreviewContainer}>
            <p>
              <b>Link to the project:</b>
            </p>
            <a
              className={css.projectCardLink}
              href={cardData[order as keyof typeof cardData].link}
              target="blank"
            >
              <img
                src={cardData[order as keyof typeof cardData].imageLink}
                alt={cardData[order as keyof typeof cardData].name}
                className={css.projectCardPreview}
              />
            </a>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default ProjectCard;
