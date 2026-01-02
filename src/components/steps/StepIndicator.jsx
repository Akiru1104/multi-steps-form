const StepIndicator = ({ step, totalSteps }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-2 w-2 rounded-full transition-all ${
            index === step ? "bg-black" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
