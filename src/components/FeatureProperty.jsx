import styles from "../styles/FeatureProperty.module.css";
import { useState, useEffect, useRef } from "react";
import BannerImage3 from "../assets/banner03_Recent.jpg";
import Button from "./Button";
import p2 from "../assets/p2.png";
import speaker from "../assets/speaker3.png";
import britishCouncil from "../assets/logo-br-co.png";

let FeatureProperty = () => {
  let aboutRef = useRef(null);
  let [isFirstView, setIsFirstView] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFirstView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <div className={styles.FeatureProperty} id="speaker">
      <div className={styles.innerFeatureProperty}>
        <div
          className={`${styles.FeaturePropertyContent} ${
            styles.animationSection
          } ${isFirstView ? styles.showAnimationSection : ""}`}
          ref={aboutRef}
        >
          <h1>Meet the Webinar Leader</h1>
          <h4 className={styles.innerFeaturePropertyDiscrip}>
            Our webinar is led by Ms. Sanjita, an expert IELTS trainer known for
            her clear and effective teaching.
          </h4>
          <p className={styles.innerFeaturePropertyDiscrip2}>
          With 10+ years of experience, we’ve helped 100,000+ students and 100+ clients secure visas.
          </p>

          <Button text={"JOIN NOW FOR Rs 99"} />
        </div>
        <div
          className={`${styles.imageSection} ${styles.animationSection} ${
            isFirstView ? styles.showAnimationSection : ""
          }`}
        >
          <img alt="First Image" className={styles.bigImage} src={speaker} />
          <div className={styles.overlayDiv}>
            <h4>Certified by</h4>
            <img className={styles.brLogo} src={britishCouncil} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProperty;
