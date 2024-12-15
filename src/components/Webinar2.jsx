import styles from "../styles/Webinar.module.css";
import Button from "./Button";

const Webinar2 = () => {
  return (
    <>
      <div className={styles.containerParent}>
        <div className={styles.containerInside}>
          <h1>
            Only <span>50</span> Seats Left!
          </h1>
          <p>
            The webinar seats are filling fast! Don’t miss out on this
            limited-time ₹99 offer.
          </p>
          <Button text={"JOIN NOW FOR Rs 99"} />
        </div>
      </div>
    </>
  );
};

export default Webinar2;
