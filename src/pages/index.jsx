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
const Home = () => {
  //STEP VALUE
  const [step, setStep] = useState(0);

  //KEY VALUE
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  // console.log(formValues);
  //PHOTO DRAGGING
  const [isDragging, setIsDragging] = useState(false);

  // PHOTO STATE
  const inputRef = useRef();
  const [imageUrl, setImageUrl] = useState("");

  //SAVE FROM DATA
  const dataSave = () => {
    localStorage.setItem(
      "saveFromData",
      JSON.stringify({ ...formValues, step: step + 1 })
    );
  };

  //
  const dataSaveRemove = () => {
    localStorage.removeItem("saveFromData");
  };

  // sdasdasda
  const dataFromSave = () => {
    const value = localStorage.getItem("saveFromData");
    return value ? JSON.parse(value) : null;
  };

  // PHOTO CLICK
  const handleBrowserClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleUploadedImage = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    setFormValues((previous) => ({ ...previous, profile: imageUrl }));
  };
  const handleImageChange = (event) => {
    const uploadedImage = Array.from(event.target.files).at(0);
    // if (!uploadedImage) return;

    const imageUrl = URL.createObjectURL(uploadedImage);

    setImageUrl(imageUrl);

    setFormValues((previous) => ({ ...previous, profile: imageUrl }));
  };

  //PHOTO CLEAR BUTTON
  const clearImage = () => {
    inputRef.current.value = "";
    setImageUrl("");
    setFormValues((previous) => ({ ...previous, profile: "" }));
  };

  // STEP +
  const totalSteps = 4;
  const handleClick = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  // STEP -
  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // INPUT VALUE
  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormErrors((previous) => ({ ...previous, [name]: "" }));
    setFormValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();

    setIsDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const uploadedImage = Array.from(event.dataTransfer.files).at(0);

    handleUploadedImage(uploadedImage);

    setIsDragging(false);
  };
  const handleDragLeave = () => setIsDragging(false);

  const Container = [ContactInfo, PrivateInfo, ProfileInfo, Success][step];

  useEffect(() => {
    const valueFromLocal = dataFromSave();
    if (valueFromLocal) {
      setFormValues(valueFromLocal);
      setStep(valueFromLocal.step);
    }
  }, []);

  return (
    <div className="bg-gray-100 w-screen flex justify-center items-center h-screen">
      <motion.div
        className="bg-white w-120 drop-shadow-md rounded-xl p-8 flex flex-col gap-7 "
        key={step}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 2 }}
      >
        <StepIndicator step={step} totalSteps={totalSteps} />
        <Container
          totalSteps={totalSteps}
          step={step}
          handleChange={handleChange}
          formValues={formValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          handleClick={handleClick}
          handlePrev={handlePrev}
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
      </motion.div>
    </div>
  );
};
export default Home;
