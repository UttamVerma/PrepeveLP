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
        <div className={styles.FeaturesChild}>
          <div
            className={`${styles.FeaturesImage} ${styles.animationSection} ${
              isFirstView ? styles.showAnimationSection : ""
            }`}
            ref={aboutRef}
          >
            {/* <img className={styles.img2} src={featImg2} alt="" /> */}
            <img className={styles.img1} src={BannerImage4} alt="" />
          </div>
          <div
            className={`${styles.FeaturesContent} ${styles.animationSection} ${
              isFirstView ? styles.showAnimationSection : ""
            }`}
          >
            <div className={styles.yellowLineFlex}>
              <div></div>
              <h5>Elevate Your Learning</h5>
            </div>
            <h1>Reasons to Attend This Webinar</h1>
            <p className={styles.FeaturesContentPara}>
              Join our exclusive IELTS webinar to gain expert insights, proven
              strategies, and practical tips for all test sections. Boost your
              performance, access study materials, and interact with experienced
              trainers to prepare confidently for a high band score.
            </p>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p><b>Expert guidance:</b> Learn from certified IELTS instructors with years of experience helping candidates succeed.</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p><b>Proven Strategies:</b> Discover tried-and-tested tips to boost your performance in both the writing and speaking sections.</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p><b>Boost Confidence:</b>Improve your fluency, vocabulary, and coherence to speak with confidence during the speaking exam.</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p><b>Master Writing:</b> Understand how to structure your essays, respond to writing tasks, and impress examiners with clear and effective communication</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p><b>Interactive Sessions:</b>Engage with live Q&A to get personalized advice and real-time feedback.</p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p><b>Time Management Tips:</b>Learn how to manage your time effectively during both sections to maximize your score.</p>
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
