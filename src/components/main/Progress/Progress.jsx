import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Progress = ({ step, onStepItemChange, onSubmit }) => {
  return (
    <>
      <section className="col col-lg-6 col-sm-12">
        {step === 0 && <Step1 onStepItemChange={onStepItemChange} />}
        {step === 1 && <Step2 onStepItemChange={onStepItemChange} />}
        {step === 2 && (
          <Step3 onSubmit={onSubmit} onStepItemChange={onStepItemChange} />
        )}
      </section>
    </>
  );
};

export default Progress;
