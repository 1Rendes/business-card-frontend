import { IoIosArrowDropdownCircle } from "react-icons/io";
import css from "./AccordionListItem.module.css";
import { AccordionStates } from "../types/accordion-states";
import { Dispatch, SetStateAction, useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import EducationItem from "./EducationItem";

const AccordionListItem = ({
  name,
  order,
  accordionStates,
  setAccordionStates,
  shortDescription,
  isList = false,
}: {
  name: string;
  order: keyof AccordionStates;
  accordionStates: AccordionStates;
  setAccordionStates: Dispatch<SetStateAction<AccordionStates>>;
  shortDescription: string;
  isList?: boolean;
}) => {
  const { t } = useTranslation();
  const [itemHeight, setItemHeight] = useState<number>(43);
  const contentRef = useRef<HTMLLIElement>(null);

  const calculateHeight = (): void => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setItemHeight(height);
    }
  };

  useEffect(() => {
    calculateHeight();
  }, [shortDescription, t]);

  useEffect(() => {
    if (accordionStates[order] === "opened") {
      calculateHeight();
    } else {
      setItemHeight(43);
    }
  }, [accordionStates, order]);

  return (
    <li
      ref={contentRef}
      className={css.projectItem}
      style={{ height: `${itemHeight}px` }}
    >
      <div
        className={css.projectItemHeader}
        onClick={() =>
          setAccordionStates((prev) => ({
            ...prev,
            [order]: prev[order] === "opened" ? "closed" : "opened",
          }))
        }
      >
        <p>
          <b>{name}</b>
        </p>
        <IoIosArrowDropdownCircle
          className={clsx(
            css.arrow,
            accordionStates[order] === "opened" && css.openedArrow
          )}
        />
      </div>
      {accordionStates[order] === "opened" && (
        <div className={css.openedInfo}>
          {isList ? (
            <div className={css.educationItemsContainer}>
              <EducationItem
                educationNumber="first"
                href="https://drive.google.com/file/d/11SHbgIBWBGn26p5FSf4-vylxo1p4rRR9/view?usp=drive_link00000000000/view?usp=sharing"
              />
              <EducationItem educationNumber="second" />
              <EducationItem educationNumber="third" />
              <EducationItem educationNumber="fourth" />
            </div>
          ) : (
            <ul className={css.itemsList}>
              {shortDescription.split(",").map((item, index) => (
                <li key={index} className={css.listItem}>
                  {item.trim()}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </li>
  );
};

export default AccordionListItem;
