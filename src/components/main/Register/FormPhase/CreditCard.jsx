import styles from "./CreditCard.module.scss";
import InputGroup from "./InputGroup";
const CreditCard = ({ formRef }) => {
  return (
    <>
      <form className="col col-12" data-phase="credit-card">
        <h3 className={styles.formTitle}>付款資訊</h3>
        <section className={`${styles.formBody} col col-12`}>
          <div className={`${styles.row} col col-12`}>
            <InputGroup
              inputLabel="持卡人姓名"
              placeholder="John Doe"
              formRef={formRef}
            />
          </div>
          <div className={`${styles.row} col col-12`}>
            <InputGroup
              inputLabel="卡號"
              placeholder="1111 2222 3333 4444"
              formRef={formRef}
            />
          </div>
          <div className={`${styles.row} col col-12`}>
            <InputGroup
              inputLabel="有效期限"
              placeholder="MM/YY"
              formRef={formRef}
            />
            <InputGroup
              inputLabel="CVC / CCV"
              placeholder="123"
              formRef={formRef}
            />
          </div>
        </section>
      </form>
    </>
  );
};
export default CreditCard;
