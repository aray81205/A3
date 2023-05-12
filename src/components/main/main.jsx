// -- style
import styles from "./Main.module.scss";
// -- component
import Register from "./Register/Register";
import Cart from "./Cart/Cart";
import Progress from "./Progress/Progress";
// --
import { useState, useRef } from "react";
// --
const Main = ({ icons }) => {
  const [step, setStep] = useState(0);
  const [shippingCost, setShippingCost] = useState("免費");
  const formRef = useRef(new Map());

  const handleStepItemChange = ({ step }) => setStep(step);
  const handleShippingOption = ({ price }) => setShippingCost(price);
  const handleSubmit = () => {
    let nFill = 0;
    formRef.current.forEach((value, key) => {
      if (value.value) {
        console.log(`${key}：${value.value}`);
      } else {
        console.log(`${key}： 沒填`);
        nFill += 1;
      }
    });
    console.log(`=========> 共${nFill}個欄位沒填`);
  };
  return (
    <>
      <main className={styles.siteMain}>
        <div className={styles.mainContainer}>
          <Register
            icons={icons}
            step={step}
            onShippingOption={handleShippingOption}
            formRef={formRef}
          />
          <Cart icons={icons} shippingCost={shippingCost} />
          <Progress
            icons={icons}
            step={step}
            onStepItemChange={handleStepItemChange}
            onSubmit={handleSubmit}
          />
        </div>
      </main>
    </>
  );
};

export default Main;
