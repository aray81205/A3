import styles from "./Progress.module.scss";
import { ReactComponent as RightarrowIcon } from "../../../assets/icons/right-arrow.svg";

const ProgressStep1 = ({ onStepItemChange }) => {
  return (
    <section
      className={`${styles.buttonGroup} col col-12`}
      data-phase="address"
    >
      <button
        className={`${styles.next} ${styles.cursorPoint}`}
        onClick={() => {
          onStepItemChange?.({ step: 1 });
        }}
      >
        下一步
        <RightarrowIcon className={styles.cursorPoint} />
      </button>
    </section>
  );
};

export default ProgressStep1;
