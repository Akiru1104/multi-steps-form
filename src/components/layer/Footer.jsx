export const Footer = ({
  handleClick,
  handlePrev,
  totalSteps,
  step,
  handleSubmit,
}) => {
  return (
    <div className="flex gap-3 flex-row-reverse">
      {" "}
      {step > -2 && (
        <button
          className="w-full h-[44] flex justify-center items-center px-3 py-[10] gap-2 rounded-md bg-[#121316] text-white cursor-pointer"
          onClick={handleClick}
        >
          Continue {step + 1}/{totalSteps - 1}
          <img src="Vector.png" alt="" className="" />
        </button>
      )}
      {step > 0 && (
        <button
          className="w-50 h-[44] flex justify-center items-center px-3 py-[10] gap-2 rounded-md bg-[white] text-black cursor-pointer border-[#CBD5E1] border"
          onClick={handlePrev}
        >
          <img src="./chevron_left.png" alt="vector" />
          Back
        </button>
      )}
    </div>
  );
};
