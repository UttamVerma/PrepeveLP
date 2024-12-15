import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/WhatWillYouLearn.module.css';

const WhatWillYouLearn = () => {
    const [inViewDay1, setInViewDay1] = useState(false);
    const [inViewDay2, setInViewDay2] = useState(false);
  
    // Refs for each day container
    const day1Ref = useRef(null);
    const day2Ref = useRef(null);
  
    // Intersection Observer callback
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
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
        threshold: 0.3, // Trigger when 30% of the element is visible
      });
  
      if (day1Ref.current) observer.observe(day1Ref.current);
      if (day2Ref.current) observer.observe(day2Ref.current);
  
      // Cleanup on component unmount
      return () => {
        if (day1Ref.current) observer.unobserve(day1Ref.current);
        if (day2Ref.current) observer.unobserve(day2Ref.current);
      };
    }, []);
  
    return (
      <div className={styles.container} id="whatLearn">
        <div className={styles.heading}>
          <h1>What Will You Learn in <span>2 Days?</span></h1>
          <h3>Here’s What You’ll Learn in Just 2 Days</h3>
        </div>
  
        <div
          ref={day1Ref}
          className={`${styles.day} ${inViewDay1 ? styles.fadeIn : ''}`}
        >
          <h4 className={styles.dayTitle}>DAY-1 Speaking</h4>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>01</div>
              <div className={styles.cardContent}>IELTS Speaking Assessment Criteria</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>02</div>
              <div className={styles.cardContent}>Strategies for Speaking Part 1</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>03</div>
              <div className={styles.cardContent}>Live Practice of Part 1</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>04</div>
              <div className={styles.cardContent}>Vocabulary for IELTS</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>05</div>
              <div className={styles.cardContent}>Q&A</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>06</div>
              <div className={styles.cardContent}>Bonus for Webinar Attendees</div>
            </div>
          </div>
        </div>
  
        <div
          ref={day2Ref}
          className={`${styles.day} ${inViewDay2 ? styles.fadeIn : ''}`}
        >
          <h4 className={styles.dayTitle}>DAY-2 Writing</h4>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>01</div>
              <div className={styles.cardContent}>IELTS Writing Format</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>02</div>
              <div className={styles.cardContent}>IELTS Writing Assessment Criteria</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>03</div>
              <div className={styles.cardContent}>How to Generate Ideas for different Essay Types</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>04</div>
              <div className={styles.cardContent}>How to structure your Essay</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>05</div>
              <div className={styles.cardContent}>Live Essay Writing Practice</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>06</div>
              <div className={styles.cardContent}>Q&A</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>07</div>
              <div className={styles.cardContent}>Bonus for Webinar Attendees</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhatWillYouLearn;
