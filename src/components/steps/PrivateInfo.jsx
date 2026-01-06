import { Header } from "../layer/Header";
import { ErrorMessage } from "../ui/ErrorMessage";

export const PrivateInfo = ({ handleChange, formValues, formErrors }) => {
  return (
    <div>
      <Header />

      <div className="flex flex-col gap-y-3 mt-8 mb-15">
        {/* Email */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm text-[#334155]">
            Email <span className="text-red-600">*</span>
          </p>
          <input
            type="email"
            name="email"
            value={formValues.email || ""}
            onChange={handleChange}
            placeholder="Your email"
            className={`w-[416] h-11 rounded-md border p-3 ${
              formErrors.email ? "border-red-500" : "border-[#CBD5E1]"
            }`}
          />
          <ErrorMessage message={formErrors.email} />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm text-[#334155]">
            Phone number <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            name="phoneNumber"
            value={formValues.phoneNumber || ""}
            onChange={handleChange}
            placeholder="Your phone number"
            className={`w-[416px] h-11 rounded-md border p-3 ${
              formErrors.phoneNumber ? "border-red-500" : "border-[#CBD5E1]"
            }`}
          />
          <ErrorMessage message={formErrors.phoneNumber} />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm text-[#334155]">
            Password <span className="text-red-600">*</span>
          </p>
          <input
            type="password"
            name="password"
            value={formValues.password || ""}
            onChange={handleChange}
            placeholder="Your password"
            className={`w-[416px] h-11 rounded-md border p-3 ${
              formErrors.password ? "border-red-500" : "border-[#CBD5E1]"
            }`}
          />
          <ErrorMessage message={formErrors.password} />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm text-[#334155]">
            Confirm password <span className="text-red-600">*</span>
          </p>
          <input
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword || ""}
            onChange={handleChange}
            placeholder="Confirm password"
            className={`w-[416px] h-11 rounded-md border p-3 ${
              formErrors.confirmPassword ? "border-red-500" : "border-[#CBD5E1]"
            }`}
          />
          <ErrorMessage message={formErrors.confirmPassword} />
        </div>
      </div>
    </div>
  );
};
