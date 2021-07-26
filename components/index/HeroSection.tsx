import styles from "@/styles/index/HeroSection.module.scss";
import Button from "../Button";
import Img from "react-optimized-image";

const HeroSection = () => (
  <section className={styles.heroSection}>
    <div className={styles.left}>
      <div className={styles.preHeading}>Hi! I&apos;m Aman Harwara,</div>
      <h1 className={styles.heading}>
        A multi-faceted programmer &amp; artist
      </h1>
      <p className={styles.subHeading}>
        I create beautiful &amp; perfomant websites, make ambient music and
        write articles &amp; essays about a variety of topics.
      </p>
      <div className={styles.callToAction}>
        <Button href="/#work" external={false}>
          View My Work
        </Button>
        <a href="#contact" className={styles.secondaryCTA}>
          Get In Touch
        </a>
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.rect}>
        <div className={styles.center}>
          <Img
            src={require(`../../public/icons/altus/altus.svg`)}
            alt="Altus logo"
          />
        </div>
      </div>
      <div className={styles.rect}>
        <Img
          webp
          src={require(`../../public/img/music/moodbender.png`)}
          alt="Moodbender cover"
        />
      </div>
      <div className={styles.rect}>
        <div className={styles.center}>
          <Img
            src={require(`../../public/icons/chartr/chartr.svg`)}
            alt="Altus logo"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
