import { HiDotsHorizontal } from "react-icons/hi";
import css from "./BasicCard.module.css";

const BasicCard = ({ handleOpenCards }: { handleOpenCards: () => void }) => {
  return (
    <div className={css.basicCard}>
      <div className={css.whiteback}>
        <p className={css.name}>Volodymyr Solonin</p>
        <p className={css.profession}>Full Stack Developer</p>
        <div className={css.addressBlock}>
          <address className={css.address}>Hauptstraße 100</address>
          <address className={css.address}>33647 Bielefeld</address>
          <a href="tel:01717494053" className={css.address}>
            Mobil.:01717494053
          </a>
          <a href="mailto:petrpetrovv123@gmail.com" className={css.address}>
            petrpetrovv123@gmail.com
          </a>
          <a
            className={css.addressLink}
            target="blank"
            href="https://github.com/1Rendes"
          >
            Github
          </a>
          <HiDotsHorizontal
            className={css.dots}
            onClick={() => {
              handleOpenCards();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
