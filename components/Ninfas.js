import styles from "../styles/projects.module.css";
import { BsArrowRight } from "react-icons/bs";
import React from "react";
import ReactPlayer from "react-player/youtube";

const Ninfas = () => {
  return (
    <section className={styles.homeProject}>
      <div className={styles.homeProjectContainer}>
        <div className={styles.homeProjectContent}>
          <a className={styles.projectTitle}>Ninfas Missouri City</a>
          <div className={styles.projectTasks}>
            <span>NEXT.JS</span>
            <span>REACT</span>
            <span>CSS</span>
          </div>
          <div className={styles.projectDescription}>
            <p>Website made for the restaurant Mama Ninfa.</p>
          </div>
          <a className={styles.projectName}>
            Visit <BsArrowRight />
          </a>
        </div>
        <div className={styles.homeProjectGraphics}>
          <a href="google.com" className={styles.videoContainer}>
            <div className="player-wrapper"></div>
            <ReactPlayer
              className="react-player"
              url={
                "https://www.youtube.com/watch?v=D8u4RPIYouU&ab_channel=Dr.Ultr0n"
              }
              muted="true"
              width="100%"
              height="100%"
              playing="true"
              loop="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Ninfas;
