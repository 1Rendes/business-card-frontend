import css from "./Profile.module.css";
import profile from "../images/profile-photo.png";
import AccordionListItem from "./AccordionListItem";
import { useState } from "react";
import clsx from "clsx";
const Profile = ({ isOpen }: { isOpen: boolean }) => {
  const [accordionStates, setAccordionStates] = useState({
    first: "closed",
    second: "closed",
    third: "closed",
    fourth: "closed",
    fifth: "closed",
    sixth: "closed",
  });

  return (
    <div className={clsx(css.profile, isOpen && css.profileOpen)}>
      <div className={css.firstBlock}>
        <div className={css.nameBlock}>
          <h1>Volodymyr Solonin</h1>
          <p>
            is a full-stack web developer with expertise in React, Next.js,
            TypeScript, Node.js (Fastify), and MongoDB. He has practical
            experience working in team environments, contributing to both
            frontend and backend parts of projects. His skills cover the
            development of landing pages, full-scale applications, and
            microservices for larger systems. Volodymyr actively works with AI
            technologies, building applications that integrate frameworks such
            as LangChain and LiveKit. He utilizes Redis for efficient caching
            strategies and focuses on creating scalable and maintainable
            architectures. His interests include studying the influence of AI on
            software development practices and applying these insights to
            real-world projects. Volodymyr consistently aims to deliver
            optimized, robust solutions that meet modern development standards.
          </p>
          <table className={css.table}>
            <tbody>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>Main stack</b>
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
                    <b>Education</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <a
                    target="blank"
                    className={css.projectItem}
                    href="https://drive.google.com/file/d/11SHbgIBWBGn26p5FSf4-vylxo1p4rRR9/view?usp=drive_link00000000000/view?usp=sharing"
                  >
                    GoIT online courses (2024.01 - 2024.12)
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <h3>Projects from education:</h3>
          <ul className={css.projectsList}>
            <AccordionListItem
              href="https://1rendes.github.io/goit-markup-hw-06/"
              name="WebStudio"
              order="first"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
            />
            <AccordionListItem
              href="https://1rendes.github.io/Project-SuperCode/"
              name="Watchcharm"
              order="second"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
            />
            <AccordionListItem
              href="https://1rendes.github.io/Project-SuperScript/"
              name="Portfolio"
              order="third"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
            />
            <AccordionListItem
              href="https://movie-observer.vercel.app/"
              name="Movie-observer"
              order="fourth"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
            />
            <AccordionListItem
              href="https://aqua-track-duna-front.vercel.app/"
              name="AquaTrack"
              order="fifth"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
            />
            <AccordionListItem
              href="https://travel-trucks-test-task.vercel.app/"
              name="Travel-trucks"
              order="sixth"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
            />
          </ul>
          <table className={css.table}>
            <tbody>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>Main stack</b>
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
                    <b>Education</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <a
                    target="blank"
                    className={css.projectItem}
                    href="https://drive.google.com/file/d/11SHbgIBWBGn26p5FSf4-vylxo1p4rRR9/view?usp=drive_link00000000000/view?usp=sharing"
                  >
                    GoIT online courses (2024.01 - 2024.12)
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <img className={css.profilePhoto} src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Profile;
