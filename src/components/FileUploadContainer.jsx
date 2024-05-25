import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const FileUploadContainer = ({ getImageUrl }) => {
  const [imageUrl, setUrl] = useState("");
  const inputRef = useRef(null);
  const formdata = new FormData();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      formdata.append("file", file);
      formdata.append("upload_preset", "upload_preset");

      const response = await axios.post(
        `${import.meta.env.VITE_CLOUDINARY_UPLOAD_URL}`,
        formdata
      );
      setUrl(response.data.url);
    }
    getImageUrl(imageUrl);
  };

  useEffect(() => {
    if (imageUrl) {
      getImageUrl(imageUrl);
    }
  }, [imageUrl]);

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
