import styles from "../../../../style/InputGroup.module.scss";
const InputGroup = ({ inputLabel, placeholder, className, formRef }) => {
  return (
    <div className={`${styles.inputGroup} ${className}`}>
      <div className={styles.inputLabel}>{inputLabel}</div>
      <input
        type="text"
        placeholder={placeholder}
        ref={(node) => {
          formRef.current.set(inputLabel, node);
        }}
      />
    </div>
  );
};

export default InputGroup;
