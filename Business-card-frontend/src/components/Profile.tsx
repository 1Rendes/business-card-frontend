import { useState, useRef, useEffect, JSX } from "react";
import css from "./Profile.module.css";
import AccordionListItem from "./AccordionListItem";
import clsx from "clsx";
import profile from "../images/profile.png";

const Profile = (): JSX.Element => {
  const profileRef = useRef<HTMLDivElement>(null);

  const [accordionStates, setAccordionStates] = useState({
    first: "closed",
    second: "closed",
    third: "closed",
    fourth: "closed",
    fifth: "closed",
    sixth: "closed",
  });

  useEffect(() => {
    const setBodyHeight = (): void => {
      if (profileRef.current) {
        document.body.style.height = `${
          profileRef.current.offsetHeight + 450
        }px`;
      }
    };
    setBodyHeight();
    window.addEventListener("resize", setBodyHeight);
    return () => {
      window.removeEventListener("resize", setBodyHeight);
      document.body.style.height = ""; // сброс при размонтировании
    };
  }, []);

  return (
    <div ref={profileRef} className={clsx(css.profile)}>
      <div className={css.firstBlock}>
        <div className={css.nameBlock}>
          <div className={css.mainDescriptionBlock}>
            <div className={css.mainDescriptionBlockTitle}>
              <h1>Volodymyr Solonin</h1>
              <p>
                is a full-stack web developer with hands-on experience in
                scalable applications and working in collaborative team
                environments. His work spans both frontend and backend, with a
                particular interest in the integration of AI technologies into
                web development.
              </p>
            </div>
            <img className={css.profilePhoto} src={profile} alt="profile" />
          </div>
          <h3>Core competencies:</h3>
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
                    <b>Frontend</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>React, Next.js, TypeScript</p>
                </td>
              </tr>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>Backend</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>Node.js, Fastify, Express,MongoDB</p>
                </td>
              </tr>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>Architecture</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>Full-scale apps, landing pages, microservices</p>
                </td>
              </tr>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>AI Frameworks</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>LangChain, LiveKit</p>
                </td>
              </tr>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>Caching and performance</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>Redis</p>
                </td>
              </tr>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>Development practices</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>
                    Scalable architecture, maintainability, team collaboration
                  </p>
                </td>
              </tr>
              <tr className={css.string}>
                <td className={css.stringHeader}>
                  <p>
                    <b>Areas of interest</b>
                  </p>
                </td>
                <td className={css.stringData}>
                  <p>
                    AI impact on development workflows and real-world
                    applications
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
              shortDescription="Landing page for a web studio, adaptive typesetting, HTML, CSS"
            />
            <AccordionListItem
              href="https://1rendes.github.io/Project-SuperCode/"
              name="Watchcharm"
              order="second"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription="Landing page for a watch charm, adaptive typesetting, HTML, CSS, JavaScript"
            />
            <AccordionListItem
              href="https://1rendes.github.io/Project-SuperScript/"
              name="Portfolio"
              order="third"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription="Portfolio page, adaptive typesetting, HTML, CSS, JavaScript, SASS"
            />
            <AccordionListItem
              href="https://movie-observer.vercel.app/"
              name="Movie-observer"
              order="fourth"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription="Web application for searching movies, series, actors. Created on existing API"
            />
            <AccordionListItem
              href="https://aqua-track-duna-front.vercel.app/"
              name="AquaTrack"
              order="fifth"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription="Web application for tracking daily water intake. Full-stack project"
            />
            <AccordionListItem
              href="https://travel-trucks-test-task.vercel.app/"
              name="Travel-trucks"
              order="sixth"
              accordionStates={accordionStates}
              setAccordionStates={setAccordionStates}
              shortDescription="Web application for searching trucks for transport. Created on existing API"
            />
          </ul>
          <h3>Contact information:</h3>
          <div className={css.contactInfo}>
            <a href="tel:+491717494053" className={css.address}>
              <b>Mobil.:</b> +49 (0)171 749 4053
            </a>
            <a href="mailto:mail@volo.rocks" className={css.address}>
              <b>Email:</b> mail@volo.rocks
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
