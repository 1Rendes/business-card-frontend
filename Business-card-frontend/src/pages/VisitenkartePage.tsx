import { JSX } from "react";
import BasicCard from "../components/BasicCard";
import SecondCard from "../components/SecondCard";
import styles from "./VisitenkartePage.module.css";

const VisitenkartePage = (): JSX.Element => {
  return (
    <div className={styles.VisitenkartePage}>
      <BasicCard />
      <SecondCard />
    </div>
  );
};

export default VisitenkartePage;
