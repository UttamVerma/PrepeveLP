// import styles from "../styles/Numbers.module.css";

// let Numbers = () => {
//   const stats = [
//     {
//       value: "3M+",
//       label: "Users",
//       description: "Annually visit our Platform",
//     },
//     { value: "20K+", label: "Candidates", description: "Trained" },
//     { value: "10K+", label: "Students", description: "Placed in Abroad" },
//     { value: "7K", label: "Candidates", description: "Helped in Migration" },
//     { value: "7.5", label: "Band Score", description: "In IELTS Exam" },
//     { value: "50", label: "Nationalities", description: "of trained students" },
//   ];
//   return (
//     <>
//       <div className={styles.numbersContainer} id="whyJoin">
//         <div className={styles.innerNumbersContainer}>
//           {stats.map((stat, index) => (
//             <div key={index} className={styles.statItem}>
//               <h1 className={styles.value}>{stat.value}</h1>
//               <h3 className={styles.label}>{stat.label}</h3>
//               <p className={styles.description}>{stat.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Numbers;

import React from 'react';
import styles from "../styles/Numbers.module.css";
import Google from "../assets/google.png";
import Student from "../assets/student.png";
import India from "../assets/india.png";

const Numbers = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Over 5000 students achieved a 7+ Band {' '}
        <span className={styles.highlight}> without attending full-time classes!</span>
      </h2>

      <div className={styles.stats}>
        {/* Google Rating */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <img src={Google} alt="Google rating" className={styles.iconImage} />
          </div>
          <p className={styles.rating}>
            <strong>4.7 ⭐</strong>
          </p>
          <p className={styles.text}>Student rating</p>
        </div>

        {/* PAN India */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <img src={India} alt="PAN India" className={styles.iconImage} />
          </div>
          <p className={styles.rating}>
            <strong>PAN India</strong>
          </p>
          <p className={styles.text}>Community</p>
        </div>

        {/* App Downloads */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <img src={Student} alt="Students" className={styles.iconImage} />
          </div>
          <p className={styles.rating}>
            <strong>10K+</strong>
          </p>
          <p className={styles.text}>Students</p>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
