import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footerInnerContainer}>
        <h2 className={styles.footerTitle}>Get in Touch</h2>
        <a className={styles.footerEmail}>umairahmed.dev@gmail.com</a>
        <div className={styles.footerSocialLinks}>
          <a>Resume</a>
          <a>LinkedIn</a>
          <a>Github</a>
        </div>
        <div className={styles.footerCopyright}>
          <p>© Umair Ahmed. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
