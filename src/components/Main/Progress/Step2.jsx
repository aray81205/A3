import styles from "../../../style/Progress.module.scss";
import { ReactComponent as RightarrowIcon } from "../../../assets/icons/right-arrow.svg";
import { ReactComponent as LeftarrowIcon } from "../../../assets/icons/left-arrow.svg";

const ProgressStep2 = ({ onStepItemChange }) => {
  return (
    <section className={`${styles.buttonGroup} col col-12`}>
      <button
        className={`${styles.prev} ${styles.cursorPoint}`}
        onClick={() => {
          onStepItemChange?.({ step: 0 });
        }}
      >
        <LeftarrowIcon className={styles.cursorPoint} />
        上一步
      </button>
      <button
        className={`${styles.next} ${styles.cursorPoint}`}
        onClick={() => {
          onStepItemChange?.({ step: 2 });
        }}
      >
        下一步
        <RightarrowIcon className={styles.cursorPoint} />
      </button>
    </section>
  );
};

export default ProgressStep2;
