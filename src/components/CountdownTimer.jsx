import React, { useState, useEffect } from "react";
import styles from "../styles/CountdownTimer.module.css";

const CountdownTimer = () => {
  // State variables to hold the remaining time
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [headline, setHeadline] = useState("");
  const [countdownVisible, setCountdownVisible] = useState(true);

  useEffect(() => {
    // Get today's date and determine the next 21st December at 6 PM
    let today = new Date();
    let yyyy = today.getFullYear();
    let nextYear = yyyy + 1;

    // Define the target date as 21st December, 6:00 PM (18:00) in either the current or next year
    let birthday = new Date(`${yyyy}-12-21T18:00:00`);
    
    // If today's date is past 21st December, use the next year
    if (today > birthday) {
      birthday = new Date(`${nextYear}-12-21T18:00:00`);
    }

    const countDownDate = birthday.getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      // If the countdown is over, hide the countdown and show the content
      if (distance < 0) {
        setHeadline("The countdown is over!");
        setCountdownVisible(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className={styles.countdownTimer_container}>
      <h1 className={styles.countdownTimer_headline}>{headline}</h1>
      {countdownVisible && (
        <div className={styles.countdownTimer_countdown}>
          <ul>
            <li className={styles.countdownTimer_li}>
              <span className={styles.countdownTimer_days}>{days}</span> days
            </li>
            <li className={styles.countdownTimer_li}>
              <span className={styles.countdownTimer_hours}>{hours}</span> Hours
            </li>
            <li className={styles.countdownTimer_li}>
              <span className={styles.countdownTimer_minutes}>{minutes}</span>{" "}
              Minutes
            </li>
            <li className={styles.countdownTimer_li}>
              <span className={styles.countdownTimer_seconds}>{seconds}</span>{" "}
              Seconds
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
