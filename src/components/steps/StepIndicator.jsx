const StepIndicator = ({ step, totalSteps }) => {
  const visibleSteps = totalSteps - 1;

  return (
    <div className="flex justify-center pt-2">
      <div className="flex gap-2">
        {Array.from({ length: visibleSteps }).map((_, index) => (
          <span
            key={index}
            className={` ${index === step ? "bg-black" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
