import { IoIosArrowDropdownCircle } from "react-icons/io";
import css from "./AccordionListItem.module.css";
import { AccordionStates } from "../types/accordion-states";
import { Dispatch, SetStateAction, useEffect, useState, useRef } from "react";
import clsx from "clsx";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const AccordionListItem = ({
  href,
  name,
  order,
  accordionStates,
  setAccordionStates,
  shortDescription,
}: {
  href: string;
  name: string;
  order: keyof AccordionStates;
  accordionStates: AccordionStates;
  setAccordionStates: Dispatch<SetStateAction<AccordionStates>>;
  shortDescription: string;
}) => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [itemHeight, setItemHeight] = useState<number>(43);
  const contentRef = useRef<HTMLLIElement>(null);

  const calculateHeight = (): void => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setItemHeight(height);
    }
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

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
      onClick={() =>
        setAccordionStates((prev) => ({
          ...prev,
          [order]: prev[order] === "opened" ? "closed" : "opened",
        }))
      }
    >
      <div className={css.projectItemHeader}>
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
          <p className={css.shortDescription}>{shortDescription}</p>
          <div className={css.linkContainer}>
            <a
              target="blank"
              className={css.link}
              href={href}
              onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                event.stopPropagation();
              }}
            >
              {t("accordion.visitProject")}
            </a>
            <a
              className={css.link}
              onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                event.stopPropagation();
                setModalOpen(true);
              }}
            >
              {t("accordion.moreInfo")}
            </a>
          </div>
        </div>
      )}
      {modalOpen && (
        <ProjectCard
          isOpen={modalOpen}
          order={order}
          handleClose={() => setModalOpen(false)}
        />
      )}
    </li>
  );
};

export default AccordionListItem;
