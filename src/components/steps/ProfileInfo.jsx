import { Header } from "../layer/Header";
export const ProfileInfo = ({ handleChange }) => {
  return (
    <div>
      <Header />
      <div className="mt-8 flex flex-col gap-3">
        <div className="flex flex-col gap-2 ">
          <p className="font-semibold text-sm text-[#334155]">
            Date of birth <span className="text-red-600">*</span>
          </p>
          <input
            type="date"
            placeholder="--/--/--"
            name="dateOfBirth"
            onChange={handleChange}
            className=" w-full h-10 text-base rounded-md p-3 border border-[#CBD5E1]"
          />
        </div>
        <div className="flex flex-col gap-2">
          {" "}
          <p className="font-semibold text-sm text-[#334155]">
            Profile image <span className="text-red-600">*</span>
          </p>
          <input
            type="file"
            name="profile"
            onChange={handleChange}
            className="w-full h-45 bg-[#7F7F800D] rounded-md border border-[#CBD5E1] cursor-pointer"
            placeholder="Browser or Drop Image"
          />
        </div>
      </div>
    </div>
  );
};
