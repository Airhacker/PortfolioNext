import styles from "../styles/projects.module.css";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";

const Ninfas = () => {
  return (
    <section className={styles.homeProject}>
      <div className={styles.homeProjectContainer}>
        <div className={styles.homeProjectContent}>
          <a className={styles.projectTitle}>Ninfas Missouri City</a>
          <div className={styles.projectTasks}>
            <SiNextdotjs />
            <IoLogoJavascript />
            <IoLogoCss3 />
            <IoLogoHtml5 />
          </div>
          <div className={styles.projectDescription}>
            <p>Website made for the restaurant Mama Ninfa.</p>
          </div>
          <a className={styles.projectName}>
            Visit <BsArrowRight />
          </a>
        </div>
        <div className={styles.homeProjectGraphics}></div>
      </div>
    </section>
  );
};
export default Ninfas;
