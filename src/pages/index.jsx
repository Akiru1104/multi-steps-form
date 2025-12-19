import { useState } from "react";

import {
  ContactInfo,
  PrivateInfo,
  ProfileInfo,
  Success,
} from "@/components/steps";

import { Footer } from "@/components/layer/Footer";
import { initialValues } from "@/constants/initial";

const Home = () => {
  const [step, setStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const totalSteps = 4;
  const handleClick = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };
  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormErrors((previous) => ({ ...previous, [name]: "" }));
    setFormValues((previous) => ({ ...previous, [name]: value }));
  };
  const Container = [ContactInfo, PrivateInfo, ProfileInfo, Success][step];
  return (
    <div className="bg-gray-100 w-screen flex justify-center items-center h-screen">
      <div className="bg-white w-120 drop-shadow-md rounded-xl p-8 flex flex-col gap-7 ">
        <Container
          handleChange={handleChange}
          formValues={formValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
        />
        {step !== totalSteps - 1 && (
          <Footer
            handleClick={handleClick}
            handlePrev={handlePrev}
            totalSteps={totalSteps}
            step={step}
          />
        )}
      </div>
    </div>
  );
};
export default Home;
