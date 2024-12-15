import styles from "../styles/Webinar.module.css";
import Button from "./Button";

const Webinar = () => {
  return (
    <>
      <div className={styles.containerParent}>
        <div className={styles.containerInside}>
          <h1>Ready to transform your <span>IELTS</span> preparation?</h1>  
          <p>Book your spot now for just ₹99 and unlock a world of possibilities!</p>
          <Button text={"JOIN NOW FOR Rs 99"}/>
        </div>
      </div>
    </>
  );
};

export default Webinar;
