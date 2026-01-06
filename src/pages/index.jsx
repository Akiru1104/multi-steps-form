import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  ContactInfo,
  PrivateInfo,
  ProfileInfo,
  Success,
} from "@/components/steps";

import StepIndicator from "@/components/steps/StepIndicator";
import { initialValues } from "@/constants/initial";
import { Footer } from "@/components/layer/Footer";

import {
  validateStepOne,
  validateStepTwo,
  validateStepThree,
} from "@/utils/validators";

const Home = () => {
  // STEP
  const [step, setStep] = useState(0);
  const totalSteps = 4; // [0,1,2,3]

  // FORM
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);

  // IMAGE / DRAG
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");

  // SAVE / LOAD (localStorage)
  const dataSave = (nextStep) => {
    const { profile, ...rest } = formValues; // profile-г localStorage-д хадгалахгүй
    localStorage.setItem(
      "saveFromData",
      JSON.stringify({ ...rest, step: nextStep })
    );
  };

  const dataFromSave = () => {
    const value = localStorage.getItem("saveFromData");
    return value ? JSON.parse(value) : null;
  };

  const dataSaveRemove = () => {
    localStorage.removeItem("saveFromData");
  };

  // IMAGE
  const handleBrowserClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleUploadedImage = (file) => {
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImageUrl(url);

    // profile дээр FILE хадгалах нь зөв (submit хийхэд хэрэгтэй)
    setFormValues((prev) => ({ ...prev, profile: file }));
    setFormErrors((prev) => ({ ...prev, profile: "" }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    handleUploadedImage(file);
  };

  const clearImage = () => {
    if (inputRef.current) inputRef.current.value = "";
    setImageUrl("");
    setFormValues((prev) => ({ ...prev, profile: null }));
  };

  // INPUT CHANGE (text/date etc.)
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    if (type === "file") {
      const file = files?.[0];
      if (!file) return;
      handleUploadedImage(file);
      return;
    }

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // DRAG & DROP
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    handleUploadedImage(file);
    setIsDragging(false);
  };

  const handleDragLeave = () => setIsDragging(false);

  // NEXT (VALIDATION + SAVE)
  const handleNext = () => {
    let result = { errors: {}, isValid: true };

    if (step === 0) result = validateStepOne(formValues);
    if (step === 1) result = validateStepTwo(formValues);
    if (step === 2) result = validateStepThree(formValues);

    setFormErrors((prev) => ({ ...prev, ...result.errors }));

    if (!result.isValid) return;

    setStep((prev) => {
      const next = Math.min(prev + 1, totalSteps - 1);
      dataSave(next);
      return next;
    });
  };

  // BACK (SAVE)
  const handlePrev = () => {
    setStep((prev) => {
      const back = Math.max(prev - 1, 0);
      dataSave(back);
      return back;
    });
  };

  const Container = [ContactInfo, PrivateInfo, ProfileInfo, Success][step];

  // LOAD on mount
  useEffect(() => {
    const saved = dataFromSave();
    if (saved) {
      setFormValues((prev) => ({ ...prev, ...saved, profile: null }));
      setStep(saved.step ?? 0);
    }
  }, []);

  // CLEAR saved data on Success
  useEffect(() => {
    if (step === totalSteps - 1) {
      dataSaveRemove();
    }
  }, [step]);

  return (
    <div className="bg-gray-100 w-screen flex justify-center items-center min-h-screen">
      <motion.div
        className="bg-white w-120 drop-shadow-md rounded-xl p-8 flex flex-col"
        key={step}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.5 }}
      >
        <StepIndicator step={step} totalSteps={totalSteps} />
        <div className="flex-1 mt-6"></div>
        <Container
          totalSteps={totalSteps}
          step={step}
          handleChange={handleChange}
          formValues={formValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          inputRef={inputRef}
          handleBrowserClick={handleBrowserClick}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          handleImageChange={handleImageChange}
          clearImage={clearImage}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          handleDragLeave={handleDragLeave}
          dataSave={dataSave}
          dataFromSave={dataFromSave}
          setFormValues={setFormValues}
          dataSaveRemove={dataSaveRemove}
        />
        {step !== totalSteps - 1 && (
          <Footer
            step={step}
            totalSteps={totalSteps}
            handleClick={handleNext}
            handlePrev={handlePrev}
          />
        )}
      </motion.div>
    </div>
  );
};

export default Home;
