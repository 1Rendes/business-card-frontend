import ReactModal from "react-modal";
import css from "./ProjectCard.module.css";
import { IoCloseSharp } from "react-icons/io5";
import WebStudio from "../images/webStudioPrev.png";
import Watchcharm from "../images/watchcharmPrev.png";
import Portfolio from "../images/portfolioPrev.png";
import MovieObserver from "../images/movieObserverPrev.png";
import AquaTrack from "../images/aquaTrackPrev.png";
import TravelTrucks from "../images/travelTrucksPrev.png";

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
      imageLink: WebStudio,
    },
    second: {
      name: "Watchcharm",
      link: "https://1rendes.github.io/Project-SuperCode/",
      imageLink: Watchcharm,
    },
    third: {
      name: "Portfolio",
      link: "https://1rendes.github.io/Project-SuperScript/",
      imageLink: Portfolio,
    },
    fourth: {
      name: "Movie-observer",
      link: "https://movie-observer.vercel.app/",
      imageLink: MovieObserver,
    },
    fifth: {
      name: "AquaTrack",
      link: "https://aqua-track-duna-front.vercel.app/",
      imageLink: AquaTrack,
    },
    sixth: {
      name: "Travel-trucks",
      link: "https://travel-trucks-test-task.vercel.app/",
      imageLink: TravelTrucks,
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
          <h2>{cardData[order as keyof typeof cardData].name}</h2>
          <a
            href={cardData[order as keyof typeof cardData].link}
            target="blank"
          >
            <img
              src={cardData[order as keyof typeof cardData].imageLink}
              alt={cardData[order as keyof typeof cardData].name}
            />
          </a>
        </div>
      </ReactModal>
    </div>
  );
};

export default ProjectCard;
