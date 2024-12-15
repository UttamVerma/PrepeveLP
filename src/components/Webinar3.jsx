import styles from "../styles/Webinar.module.css";
import Button from "./Button";

const Webinar2 = () => {
  return (
    <>
      <div className={styles.containerParent}>
        <div className={styles.containerInside}>
          <h1>
            Limited-Time <span>₹99</span> Offer – Act Fast!
          </h1>
          <p>
            Hurry! The ₹99 offer is only valid for a limited time. Once the
            seats fill up, the price goes up.
          </p>
          <Button text={"JOIN NOW FOR Rs 99"} />
        </div>
      </div>
    </>
  );
};

export default Webinar2;
