import styles from "./InputGroup.module.scss";
const InputGroup = ({ inputLabel, placeholder }) => {
  return (
    <div className={styles.inputGroup}>
      <div className={styles.inputLabel}>{inputLabel}</div>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};
export default InputGroup;
