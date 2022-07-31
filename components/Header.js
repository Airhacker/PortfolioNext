import styles from "../styles/header.module.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div>
      <section className={styles.headerContainer}>
        <h1 className={styles.headerLogo}>
          Umair <br />
          Ahmed
        </h1>
        <div className={styles.headerContent}>
          <div className={styles.headerLeft}>
            <a>
              <span>umairahmed.dev</span>@<span>gmail.com</span>
            </a>
            <div className={styles.headerPositions}>
              <span>/Web Developer</span>
            </div>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.headerAboutText}>
              <p>
                2 years web development experience.
                <br />
                Based in Houston.
                <br />
                Get in touch for availability.
              </p>
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://docs.google.com/document/d/1OKRi45ppNU2lr-N_9YfWUuB-ZyewsH8FgF0GgwkGKxE/edit"
                target="_blank"
                rel="noreferrer"
              >
                Resume
                <span></span>
              </a>
              <a
                href="https://www.linkedin.com/in/umair-ahmed-dev/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Airhacker"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
