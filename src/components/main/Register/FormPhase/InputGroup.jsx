import styles from "./InputGroup.module.scss";
const InputGroup = ({ inputLabel, placeholder, className }) => {
  return (
    <div className={`${styles.inputGroup} ${className}`}>
      <div className={styles.inputLabel}>{inputLabel}</div>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputGroup;
