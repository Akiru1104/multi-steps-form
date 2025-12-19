import { Header } from "@/components/layer/Header";
import { validateStepOne } from "@/utils/validators";
import { ErrorMessage } from "../ui/ErrorMessage";
import { Footer } from "../layer/Footer";
export const ContactInfo = ({
  handleChange,
  formValues,
  formErrors,
  handleClick,
  setFormErrors,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepOne(formValues);

    setFormErrors(errors);

    if (isValid) {
      handleClick();
    }
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col  gap-y-3 mb-30 mt-8">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-[#334155]">
            First name <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            onChange={handleChange}
            name="firstName"
            value={formValues.firstName}
            placeholder="Your first name"
            className={`w-full h-11 rounded-md p-3 border ${
              formErrors.firstName ? "border-red-500" : "border-[#cbd5e1]"
            }`}
          />
          <ErrorMessage message={formErrors.firstName} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-[#334155]">
            Last name <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            onChange={handleChange}
            value={formValues.lastName}
            name="lastName"
            placeholder="Your last name"
            className={`w-full h-11 rounded-md p-3 border ${
              formErrors.lastName ? "border-red-500" : "border-[#cbd5e1]"
            }`}
          />
          <ErrorMessage message={formErrors.lastName} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-[#334155]">
            Username <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            onChange={handleChange}
            value={formValues.username}
            name="username"
            placeholder="Your username"
            className={`w-full h-11 rounded-md p-3 border ${
              formErrors.username ? "border-red-500" : "border-[#cbd5e1]"
            }`}
          />
          <ErrorMessage message={formErrors.username} />
        </div>
      </div>
      <Footer onClick={handleSubmit} />
    </div>
  );
};
