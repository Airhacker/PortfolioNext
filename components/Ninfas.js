import styles from "../styles/projects.module.css";
import { BsArrowRight } from "react-icons/bs";
import React from "react";
import Image from "next/image";
import ninfasVideo from "../public/ninfasVideo.gif";
import ninfaFood from "../public/ninfaFood.png";

const Ninfas = () => {
  return (
    <section className={styles.homeProject}>
      <div className={styles.homeProjectContainer}>
        <div className={styles.homeProjectContent}>
          <div className={styles.projectHead}>
            <span>Project</span>
          </div>
          <a
            href="https://ninfas.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className={styles.projectTitle}
          >
            Ninfas Missouri City
          </a>
          <div className={styles.projectTasks}>
            <span>NEXT.JS</span>
            <span>REACT</span>
            <span>CSS</span>
          </div>
          <div className={styles.projectDescription}>
            <p>Website made for the restaurant Mama Ninfa.</p>
          </div>
          <a
            href="https://ninfas.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className={styles.projectName}
          >
            Visit <BsArrowRight />
          </a>
        </div>
        <div className={styles.homeProjectGraphics}>
          <a
            href="https://ninfas.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className={styles.videoContainer}
          >
            <Image
              src={ninfasVideo}
              alt="Gif of Ninfas Website"
              layout="fill"
            />
            <div className={styles.projectImage}>
              <Image
                className={styles.projectImage}
                src={ninfaFood}
                alt="Bowl of Nachos"
                layout="fill"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Ninfas;
