import css from "./Profile.module.css";
import profile from "../images/profile-photo.png";

const Profile = () => {
  return (
    <div className={css.profile}>
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
          <h3>may be also additional info or projects</h3>
        </div>
        <img className={css.profilePhoto} src={profile} alt="profile" />
      </div>
      <table className={css.table}>
        <tr className={css.string}>
          <td className={css.stringHeader}>
            <p>
              <b>Main stack</b>
            </p>
          </td>
          <td className={css.stringData}>
            <p>JavaScript, TypeScript, React, Next.js, Node.js, MongoDB</p>
          </td>
        </tr>
        {/* <tr className={css.string}>
          <td className={css.stringHeader}>
            <p>
              <b>Main stack</b>
            </p>
          </td>
          <td className={css.stringData}>
            <p>JavaScript, TypeScript, React, Next.js, Node.js, MongoDB</p>
          </td>
        </tr> */}
      </table>
    </div>
  );
};

export default Profile;
