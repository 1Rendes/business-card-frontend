import { useTranslation } from "react-i18next";
import css from "./EducationItem.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

interface EducationItemProps {
  educationNumber: string;
  href?: string;
}

const EducationItem = ({ educationNumber, href }: EducationItemProps) => {
  const { t } = useTranslation();

  const period = t(`aboutMe.educationItems.${educationNumber}.period`);
  const title = t(`aboutMe.educationItems.${educationNumber}.title`);
  const institution = t(
    `aboutMe.educationItems.${educationNumber}.institution`
  );
  const degree = t(`aboutMe.educationItems.${educationNumber}.degree`);

  return (
    <div className={css.educationItem}>
      <p className={css.periodTitle}>
        {period} - <b>{title}</b>
      </p>
      <p className={css.institution}>{institution}</p>
      <p className={css.degree}>
        {degree}{" "}
        {href && (
          <a target="blank" href={href} className={css.link}>
            <FaExternalLinkAlt />
          </a>
        )}
      </p>
    </div>
  );
};

export default EducationItem;
