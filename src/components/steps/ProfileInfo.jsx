import { Header } from "../layer/Header";

export const ProfileInfo = ({
  handleChange,
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

      <div className="mt-8 flex flex-col gap-6">
        {/* DATE OF BIRTH */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm text-[#334155]">
            Date of birth <span className="text-red-600">*</span>
          </p>
          <input
            type="date"
            name="dateOfBirth"
            onChange={handleChange}
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
            className={`relative border-2 border-dashed rounded-xl p-6 transition h-[180] ${
              isDragging
                ? "border-black bg-gray-50"
                : "border-[#CBD5E1]  bg-[#7F7F800D]"
            }`}
          >
            {/* EMPTY STATE */}
            {!imageUrl && (
              <div className="flex flex-col items-center justify-center-item justify-center-self gap-2 text-center">
                <img
                  className="h-[12] w-[12] rounded-full bg-white"
                  src="image.png"
                  alt=""
                />
                <button
                  type="button"
                  onClick={handleBrowserClick}
                  className="text-sm font-medium "
                >
                  Add image
                </button>
              </div>
            )}

            {/* IMAGE PREVIEW */}
            {imageUrl && (
              <div className="relative flex justify-center">
                <img src={imageUrl} alt="profile" className="object-cover" />

                <button
                  type="button"
                  onClick={clearImage}
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
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
