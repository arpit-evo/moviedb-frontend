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
      className="w-[39.33%] h-full  input-bg  border-dashed border-white border-2 rounded-xl flex items-center cursor-pointer z-10"
      onClick={handleClick}
    >
      <input
        className="hidden"
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
      />
      <div className="bg-transparent flex-grow ">
        <div className="w-fit mx-auto">
          <MdOutlineFileDownload className="text-2xl mx-auto" />
          <div className="body-small">Drop an image here</div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadContainer;
