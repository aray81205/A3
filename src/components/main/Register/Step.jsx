import styles from "./Step.module.scss";

const Progress = ({ icons, text, label, dataphase }) => {
  return (
    <span className={styles.progressGroup} dataphase={dataphase}>
      <span className={styles.progressIcon}>
        <span className={styles.text}>{text}</span>
        <svg className={`${styles.icon} cursor-point`}>
          <use xlinkHref={`${icons}#svg-icon-pg-complete`} />
        </svg>
      </span>
      <span className={styles.progressLabel}>{label}</span>
    </span>
  );
};

const Step = ({ icons }) => {
  return (
    <>
      <section className={`${styles.progressContainer} col col-12`}>
        {/* 寄送地址 */}
        <Progress icons={icons} text="1" label="寄送地址" dataphase="address" />
        <span className={styles.progressBar} data-order="1" />
        {/* 運送方式 */}
        <Progress
          icons={icons}
          text="2"
          label="運送方式"
          dataphase="shipping"
        />
        <span className={styles.progressBar} data-order="2" />
        {/* 付款資訊 */}
        <Progress
          icons={icons}
          text="3"
          label="付款資訊"
          dataphase="credit-card"
        />
      </section>
    </>
  );
};

export default Step;
