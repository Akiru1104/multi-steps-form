import { Header } from "../layer/Header";

export const ProfileInfo = ({
  handleChange,
  formValues,
  isDragging,
  handleDragOver,
  handleDrop,
  handleDragLeave,
  handleBrowserClick,
  handleImageChange,
  clearImage,
  imageUrl,
  inputRef,
}) => {
  return (
    <div>
      <Header />

      <div className="mt-8 flex flex-col gap-6 mb-10">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-[#334155]">
            Date of birth <span className="text-red-600">*</span>
          </p>
          <input
            type="date"
            name="dateOfBirth"
            onChange={handleChange}
            value={formValues.dateOfBirth || ""}
            className="w-full h-10 text-base rounded-md p-3 border border-[#CBD5E1]"
          />
        </div>

        {/* PROFILE IMAGE */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-[#334155]">
            Profile image <span className="text-red-600">*</span>
          </p>

          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            className={`relative border-2 border-dashed rounded-xl transition h-[180] overflow-hidden ${
              isDragging
                ? "border-black bg-gray-50"
                : "border-[#CBD5E1] bg-[#7F7F800D]"
            } ${imageUrl ? "p-0" : "p-6"}`}
          >
            <div className="w-full h-full flex items-center justify-center">
              {!imageUrl && (
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                  <div className="h-[28] w-[28] rounded-full bg-white flex items-center justify-center content-center">
                    <img className="h-[9] w-[9]" src="/image.png" alt="" />
                  </div>

                  <button
                    type="button"
                    onClick={handleBrowserClick}
                    className="text-sm font-medium"
                  >
                    Add image
                  </button>
                </div>
              )}
            </div>

            {/* IMAGE PREVIEW */}
            {imageUrl && (
              <div className="absolute inset-0">
                <img
                  src={imageUrl}
                  alt="profile"
                  className="w-full h-full object-cover"
                />

                <button
                  type="button"
                  onClick={clearImage}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            )}

            {/* HIDDEN INPUT */}
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
