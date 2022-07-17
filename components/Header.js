import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div>
      <section className={styles.headerContainer}>
        <h1 className={styles.headerLogo}>Umair Ahmed</h1>
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
                Based in Houston
                <br />
                Get in touch for availability.
              </p>
            </div>
            <div className={styles.socialLinks}>
              <a>Resume</a>
              <a>LinkedIn</a>
              <a>Github</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
