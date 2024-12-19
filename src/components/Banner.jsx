// import { useState, useEffect, useRef, useContext } from "react";
// import { ToastContainer, toast, Bounce } from "react-toastify";

// import BannerRecentImg from "../assets/banner010.jpg";
// import styles from "../styles/Banner.module.css";
// import Button from "./Button";
// import CountdownTimer from "../components/CountdownTimer";

// let Banner = () => {
//   let images = [BannerRecentImg];
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(intervalId);
//   }, []);

//   let aboutRef = useRef(null);
//   let [isFirstView, setIsFirstView] = useState(false);

//   useEffect(() => {
//     let observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsFirstView(true);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     if (aboutRef.current) {
//       observer.observe(aboutRef.current);
//     }

//     return () => {
//       if (aboutRef.current) {
//         observer.unobserve(aboutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <div id="home" className={styles.banner}>
//         {images.map((item, index) => {
//           return (
//             <img
//               className={styles.bannerImg}
//               style={{
//                 opacity: activeIndex === index ? "1" : "0",
//                 transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
//               }}
//               src={item}
//               alt={`banner${index + 1}`}
//               key={index}
//             />
//           );
//         })}
//         <div className={styles.overlay}></div>
//         <div className={styles.bannerMain} ref={aboutRef}>
//           <div
//             className={`${styles.bannerContentSection} ${
//               styles.animationSection
//             } ${isFirstView ? styles.showAnimationSection : ""}`}
//           >
//             <h1>

//               Learn The Right Strategies To<span> Crack the IELTS Test </span>with{" "}
//               <span>7+</span> band score.
//             </h1>

//             <p>
//               Unlock your IELTS success with our exclusive 2-day webinar.
//               Limited seats available!
//             </p>
//             <span className={styles.encquireNowButton}>
//               <Button text={"JOIN NOW FOR Rs 99"} />
//             </span>
//             <CountdownTimer />
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Banner;

import { useState, useEffect } from "react";
import styles from "../styles/Banner.module.css";
import Button from "./Button";
import CountdownTimer from "./CountdownTimer";

const Banner = () => {
  const [discountPrice, setDiscountPrice] = useState(99);
  const [originalPrice, setOriginalPrice] = useState(999);

  return (
    <>
      <div className={styles.ParentbannerContainer}>
        <div className={styles.bannerContainer}>
          {/* Left Section */}
          <div className={styles.contentSection}>
            <h1 className={styles.headingText}>
              Learn strategies to{" "}
              <h1 className={styles.highlight}>achieve a 7+</h1> band score on
              the <h1 className={styles.highlight}>IELTS test.</h1>
            </h1>

            <div className={`${styles.cardsContainer} ${styles.mobileHide}`}>
              <div className={styles.card}>
                <div>
                  <span className={styles.icon}>👤</span>
                  <p className={styles.value}>5,000+</p>
                </div>

                <span className={styles.label}>Students Enrolled</span>
              </div>

              <div className={styles.card}>
                <div>
                  <span className={styles.icon}>⭐</span>
                  <p className={styles.value}>4.7</p>
                </div>
                <span className={styles.label}>2,241 Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className={styles.offerSection}>
            <div className={styles.yellowLineFlex}>
              <h5>What you'll get</h5>
              <div></div>
            </div>
            {/* <h3>What will you get</h3> */}
            <ul className={styles.featuresList}>
              <li> 100+ Online Video Lessons</li>
              <li> 50+ Mock Tests for All Sections</li>
              <li> Feedback Sessions with IELTS Trainers</li>
            </ul>
            <div className={styles.pricing}>
              <h3>₹{discountPrice}</h3>
              <span className={styles.strikeThrough}>₹{originalPrice}</span>
              <span className={styles.discountTag}>90% OFF</span>
            </div>
            <Button text={"JOIN NOW FOR Rs 99"} />
          </div>

          <div className={`${styles.cardsContainer} ${styles.mobileShow}`}>
            <div className={styles.card}>
              <div>
                <span className={styles.icon}>👤</span>
                <p className={styles.value}>5,000+</p>
              </div>

              <span className={styles.label}>Students Enrolled</span>
            </div>

            <div className={styles.card}>
              <div>
                <span className={styles.icon}>⭐</span>
                <p className={styles.value}>4.7</p>
              </div>
              <span className={styles.label}>2,241 Reviews</span>
            </div>
          </div>
        </div>
        <CountdownTimer />
      </div>
    </>
  );
};

export default Banner;
