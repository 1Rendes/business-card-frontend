import { IoIosArrowDropdownCircle } from "react-icons/io";
import css from "./AccordionListItem.module.css";
import { AccordionStates } from "../types/accordion-states";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import clsx from "clsx";
import ProjectCard from "./ProjectCard";

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
  const [modalOpen, setModalOpen] = useState(false);

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

  return (
    <li
      className={clsx(
        css.projectItem,
        accordionStates[order] === "opened" && css.opened
      )}
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
          <p>{shortDescription}</p>
          <div className={css.linkContainer}>
            <a
              target="blank"
              className={css.link}
              href={href}
              onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                event.stopPropagation();
              }}
            >
              Visit project page
            </a>
            <a
              className={css.link}
              onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                event.stopPropagation();
                setModalOpen(true);
              }}
            >
              More info...
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
