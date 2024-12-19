import styles from "../styles/Features.module.css";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import featImg1 from "../assets/featImg1.jpg";
import featImg2 from "../assets/featImg2.jpg";
import BannerImage4 from "../assets/benefits1.png";

const Features = () => {
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
    <>
      <div className={styles.FeaturesParent} id="whyChooseUs">
        <div className={styles.FeaturesChild} ref={aboutRef}>
          <div
            className={`${styles.FeaturesImage} ${styles.animationSection} ${
              isFirstView ? styles.showAnimationSection : ""
            }`}
          >
            {/* <img className={styles.img2} src={featImg2} alt="" /> */}
            <img className={styles.img1} src={BannerImage4} alt="" />
          </div>
          <div
            className={`${styles.FeaturesContent} ${styles.animationSection} ${
              isFirstView ? styles.showAnimationSection : ""
            }`}
          >
            <h1>Reasons to Attend This Webinar</h1>
            <p className={styles.FeaturesContentPara}>
              Join our IELTS webinar for expert insights, strategies, tips,
              study materials, and trainer interaction. Prepare confidently for
              a high band score!
            </p>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>
                <b>Expert guidance:</b> Learn from certified IELTS instructors
                with years of experience helping candidates succeed.
              </p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>
                <b>Proven Strategies:</b> Discover tried-and-tested tips to
                boost your performance in both the writing and speaking
                sections.
              </p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>
                <b>Boost Confidence:</b>Improve your fluency, vocabulary, and
                coherence to speak with confidence during the speaking exam.
              </p>
            </div>

            <span className={styles.encquireNowButton}>
              <Button text={"JOIN NOW FOR Rs 99"} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
