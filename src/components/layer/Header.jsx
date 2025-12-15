import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-col gap-2 p-8">
      <img className="h-[60] w-[60]" src="Logo.png" alt="" />
      <div className="text-2xl font-semibold">Join Us! 😎</div>
      <div className="text-lg font-normal text-[#8E8E8E]">
        Please provide all current information accurately.
      </div>
    </div>
  );
};
