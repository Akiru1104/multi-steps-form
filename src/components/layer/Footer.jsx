export const Footer = ({ handleClick, handlePrev, totalSteps, step }) => {
  const visibleSteps = totalSteps - 1;

  return (
    <div className="pt-4 flex items-center gap-3">
      {step > 0 && step < visibleSteps && (
        <button
          type="button"
          className="h-[44] w-[128] px-6 rounded-md bg-white text-black border border-[#CBD5E1] flex items-center"
          onClick={handlePrev}
        >
          <img src="/chevron_left.png" alt="back" />
          Back
        </button>
      )}

      {step < visibleSteps && (
        <button
          type="button"
          className="h-[44px] w-full rounded-md bg-[#121316] text-white flex items-center justify-center gap-2"
          onClick={handleClick}
        >
          Continue {step + 1}/{visibleSteps}
          <img src="/Vector.png" alt="" />
        </button>
      )}
    </div>
  );
};
