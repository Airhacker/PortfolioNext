import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/header.module.css";

const Header = () => {
  const head1 = "Umair";
  const head2 = "Ahmed";
  const email1 = "umairahmed.dev";
  const email2 = "gmail.com";
  const skills = "/Web Developer";
  const about1 = "2 years web development experience.";
  const about2 = "Based in Houston.";
  const about3 = "Get in touch for availability.";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <section className={styles.headerContainer}>
        <motion.h1
          className={styles.headerLogo}
          variants={sentence}
          initial="hidden"
          whileInView="visible"
        >
          {head1.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
          {head2.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h1>
        <div className={styles.headerContent}>
          <div className={styles.headerLeft}>
            <motion.a
              variants={sentence}
              initial="hidden"
              whileInView="visible"
            >
              {/* <span>umairahmed.dev</span>@<span>gmail.com</span> */}
              {email1.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
              @
              {email2.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.a>
            <motion.div
              className={styles.headerPositions}
              variants={sentence}
              initial="hidden"
              whileInView="visible"
            >
              {skills.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
          <div className={styles.headerRight}>
            <motion.div
              className={styles.headerAboutText}
              variants={sentence}
              initial="hidden"
              whileInView="visible"
            >
              <p>
                2 years web development experience.
                <br />
                Based in Houston.
                <br />
                Get in touch for availability.
              </p>
            </motion.div>
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
