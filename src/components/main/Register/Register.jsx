import Step from "./Step";
import Form from "./Form";
import styles from "./register.module.scss";

const Register = ({ icons, step, onShippingOption, formRef }) => {
  return (
    <>
      <section className={`${styles.registerContainer} col col-lg-6 col-sm-12`}>
        <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>
        <Step icons={icons} step={step} />
        <Form
          step={step}
          onShippingOption={onShippingOption}
          formRef={formRef}
        />
      </section>
    </>
  );
};
export default Register;
