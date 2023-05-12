import styles from "./Progress.module.scss";
import { ReactComponent as LeftarrowIcon } from "../../../assets/icons/left-arrow.svg";

const ProgressStep3 = ({ onSubmit, onStepItemChange }) => {
  return (
    <section className={`${styles.buttonGroup} col col-12`}>
      <button
        className={`${styles.prev} ${styles.cursorPoint}`}
        onClick={() => {
          onStepItemChange?.({ step: 1 });
        }}
      >
        <LeftarrowIcon className={styles.cursorPoint} />
        上一步
      </button>
      <button
        className={`${styles.next} ${styles.cursorPoint}`}
        onClick={onSubmit}
      >
        確認下單
      </button>
    </section>
  );
};

export default ProgressStep3;
