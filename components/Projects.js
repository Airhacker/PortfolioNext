import styles from "../styles/projects.module.css";
import Ninfas from "./Ninfas";

const Projects = () => {
  return (
    <section className={styles.projectsContainer}>
      <div className={styles.projectsInnerContainer}>
        <Ninfas />
      </div>
    </section>
  );
};
export default Projects;
