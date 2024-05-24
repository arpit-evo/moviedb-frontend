import React, { useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const FileUploadContainer = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  return (
    <div
      className={`h-[23.25rem] w-full sm:max-w-[29.5625rem] sm:h-[31.5rem] input-bg  border-dashed
       border-white border-2 rounded-xl flex items-center cursor-pointer z-10 mb-10 sm:row-span-3 sm:mb-0 sm:-order-2`}
      onClick={handleClick}
    >
      <input
        className="hidden"
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
      />
      <div className="bg-transparent flex-grow ">
        <MdOutlineFileDownload className="text-2xl mx-auto mb-2" />
        <div className="text-bs text-center">Drop an image here</div>
      </div>
    </div>
  );
};

export default FileUploadContainer;
