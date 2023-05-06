import { AddressPhase, CreditCard, ShippingPhase } from "./FormPhase";
import styles from "./Form.module.scss";
const FormPhase = () => {
  return (
    <>
      <section className={`${styles.formContainer} col col-12`}>
        <AddressPhase />
        {/* <CreditCard />
        <ShippingPhase /> */}
      </section>
    </>
  );
};

export default FormPhase;
