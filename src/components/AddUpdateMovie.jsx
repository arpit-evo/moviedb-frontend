import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AddUpdateMovie = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [publishingYear, setYear] = useState("");
  const [tempfileUrl, setTempUrl] = useState("");
  const [errorMesssage, setError] = useState("");
  const token = Cookies.get("accessToken");
  const navigate = useNavigate();

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setFile(file);
    const fileUrl = URL.createObjectURL(event.target.files[0]);
    setTempUrl(fileUrl);
  };

  useEffect(() => {
    console.log();
  }, [file]);

  const handleCancel = () => {
    setTitle("");
    setYear("");
    setTempUrl("");
  };

  const handleSubmit = async () => {
    if (!tempfileUrl) {
      return setError("please upload image");
    }
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/movie/add`,
        {
          title: title,
          publishingYear: publishingYear,
          file: file,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/movie-list");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="px-6 py-20 sm:p-30">
      <h2 className="text-h3 mb-20 sm:text-h2">Create a new Movie</h2>
      <div className="sm:max-h-[31.5rem] sm:max-w-[68rem] sm:gap-x-32 sm:grid sm:grid-cols-2 sm:grid-flow-row ">
        {/* input elements */}
        <div className="sm:h-fit">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            required
            className="h-11 w-full rounded-lg input-bg p-4  outline-none mb-6 block text-bs sm:max-w-[22.625rem] "
            onChange={(e) => {
              setTitle(e.target.value);
              if (errorMesssage) {
                setError("");
              }
            }}
          />
          <input
            type="number"
            placeholder="Publishing year"
            name="year"
            value={publishingYear}
            required
            className="h-11 w-full rounded-lg input-bg p-4 :focus outline-none mb-6  block text-bs sm:max-w-[13.5rem]"
            maxLength="4"
            onChange={(e) => {
              setYear(e.target.value);
              if (errorMesssage) {
                setError("");
              }
            }}
          />
          {errorMesssage && <div className="text-red-500">{errorMesssage}</div>}
        </div>
        {/* file uplad container */}
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
          {tempfileUrl ? (
            <img src={tempfileUrl} className="w-full h-full rounded-xl" />
          ) : (
            <div className="bg-transparent flex-grow ">
              <MdOutlineFileDownload className="text-2xl mx-auto mb-2" />
              <div className="text-bs text-center">Drop an image here</div>
            </div>
          )}
        </div>
        {/* buttons */}
        <div className="gap-4 flex sm:mt-14 ">
          <button
            className="w-full text-br border border-white py-4 rounded-xl sm:px-16 sm:w-fit sm:h-fit"
            type="reset"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-br w-full primary py-4  rounded-xl sm:px-20 sm:w-fit sm:h-fit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUpdateMovie;
