import styles from "../styles/Features.module.css";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import featImg1 from "../assets/featImg1.jpg";
import featImg2 from "../assets/featImg2.jpg";
import BannerImage4 from "../assets/benefits1.png";

const Features2 = () => {
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
              Join our IELTS webinar for expert insights, strategies, tips,
              study materials, and trainer interaction. Prepare confidently for
              a high band score!
            </p>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>
                <b>Guaranteed IELTS Success:</b> This isn’t just any webinar.
                It’s a success blueprint! Get the exact steps to clear IELTS
                with ease.
              </p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>
                <b>IELTS Cheat Sheet:</b> Quickly learn what you must do to
                pass.
              </p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>
                <b>Lifetime Access and Support:</b>You get continuous access to
                the materials and our expert community, ensuring you are
                supported until you achieve your IELTS success!
              </p>
            </div>
            <div className={styles.FeaturesListParent}>
              <div>
                <button className={styles.checkmarkButton}>✓</button>
              </div>{" "}
              <p>
                <b>Master Writing:</b> Understand how to structure your essays,
                respond to writing tasks, and impress examiners with clear and
                effective communication
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
export default Features2;
