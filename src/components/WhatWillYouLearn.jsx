import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/WhatWillYouLearn.module.css";
import Button from "./Button";

const WhatWillYouLearn = () => {
  const [inViewDay1, setInViewDay1] = useState(false);
  const [inViewDay2, setInViewDay2] = useState(false);

  const day1Ref = useRef(null);
  const day2Ref = useRef(null);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === day1Ref.current) {
          setInViewDay1(true);
        }
        if (entry.target === day2Ref.current) {
          setInViewDay2(true);
        }
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    if (day1Ref.current) observer.observe(day1Ref.current);
    if (day2Ref.current) observer.observe(day2Ref.current);

    return () => {
      if (day1Ref.current) observer.unobserve(day1Ref.current);
      if (day2Ref.current) observer.unobserve(day2Ref.current);
    };
  }, []);

  return (
    <div className={styles.container} id="whatLearn">
      <div className={styles.heading}>
        <h1>
          Unlock Your Potential in <span>2 Days!</span>
        </h1>
        <h3>
          Join our Crash Course {" "}for rapid IELTS success with
          step-by-step guidance and live practice sessions.
        </h3>
      </div>

      <div
        ref={day1Ref}
        className={`${styles.day} ${inViewDay1 ? styles.fadeIn : ""}`}
      >
        <h4 className={styles.dayTitle}>Day 1: Mastering Speaking</h4>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <div className={styles.cardNumber}>01</div>
            <div className={styles.cardContent}>
              Understand Speaking Assessment Criteria
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNumber}>02</div>
            <div className={styles.cardContent}>
              Learn Strategies for Speaking Part-1
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNumber}>03</div>
            <div className={styles.cardContent}>
              Practice Live Speaking Sessions
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNumber}>04</div>
            <div className={styles.cardContent}>
              Expand Your IELTS Vocabulary
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNumber}>05</div>
            <div className={styles.cardContent}>Interactive Q&A</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNumber}>06</div>
            <div className={styles.cardContent}>
              Exclusive Bonuses for Participants
            </div>
          </div>
        </div>
      </div>

      <div
        ref={day2Ref}
        className={`${styles.day} ${inViewDay2 ? styles.fadeIn : ""}`}
      >
        <h4 className={styles.dayTitle}>Day 2: Cracking the Writing Section</h4>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <div className={styles.cardNumber}>01</div>
            <div className={styles.cardContent}>
              Discover IELTS Writing Format
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNumber}>02</div>
            <div className={styles.cardContent}>
              Learn Writing Assessment Criteria
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNumber}>03</div>
            <div className={styles.cardContent}>
              Generate Ideas for Any Essay Type
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNumber}>04</div>
            <div className={styles.cardContent}>Master Essay Structure</div>
          </div>
          {/* <div className={styles.card}>
            <div className={styles.cardNumber}>05</div>
            <div className={styles.cardContent}>Live Writing Practice</div>
          </div> */}
          <div className={styles.card}>
            <div className={styles.cardNumber}>05</div>
            <div className={styles.cardContent}>Interactive Q&A</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNumber}>06</div>
            <div className={styles.cardContent}>
              Exclusive Bonuses for Participants
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ctaSection}>
        <Button text={"JOIN NOW FOR Rs 99"} />
        <p className={styles.ctaNote}>
          Hurry! Limited slots available for this exclusive 2-day crash course.
        </p>
      </div>
    </div>
  );
};

export default WhatWillYouLearn;
