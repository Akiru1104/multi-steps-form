const StepIndicator = ({ step, totalSteps }) => {
  const visibleSteps = totalSteps - 1;

  return (
    <div className="flex justify-center pt-2">
      <div className="flex gap-2">
        {Array.from({ length: visibleSteps }).map((_, index) => (
          <span
            key={index}
            className={`rounded-full transition-all ${
              index === step ? "bg-black w-2 h-2" : "bg-gray-300 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
