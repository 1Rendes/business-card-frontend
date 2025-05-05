import css from "./Card.module.css";

const Card = () => {
  return (
    <div className={css.basicCard}>
      <div className={css.whiteback}>
        <p>Volodymyr Solonin</p>
        <p>Full Stack Developer</p>
        <div>
          <address>Hauptstraße 100</address>
          <address>33647 Bielefeld</address>
        </div>
      </div>
    </div>
  );
};

export default Card;
