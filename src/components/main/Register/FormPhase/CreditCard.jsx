import styles from "./CreditCard.module.scss";
import InputGroup from "./InputGroup";
const CreditCard = () => {
  return (
    <>
      <form className="col col-12" data-phase="credit-card">
        <h3 className={styles.formTitle}>付款資訊</h3>
        <section className={`${styles.formBody} col col-12`}>
          <div className={`${styles.row} col col-12`}>
            <InputGroup inputLabel="持卡人姓名" placeholder="John Doe" />
          </div>
          <div className={`${styles.row} col col-12`}>
            <InputGroup inputLabel="卡號" placeholder="1111 2222 3333 4444" />
          </div>
          <div className={`${styles.row} col col-12`}>
            <InputGroup inputLabel="有效期限" placeholder="MM/YY" />
            <InputGroup inputLabel="CVC / CCV" placeholder="123" />
          </div>
        </section>
      </form>
    </>
  );
};
export default CreditCard;
