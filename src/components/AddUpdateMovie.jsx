import React, { useState } from "react";
import CancelButton from "./CancelButton";
import FileUploadContainer from "./FileUploadContainer";
import SubmitButton from "./SubmitButton";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AddUpdateMovie = ({ heading }) => {
  const [title, setTitle] = useState();
  const [errorMesssage, setError] = useState("");
  const [imageUrl, setUrl] = useState();
  const [publishingYear, setYear] = useState();
  const token = Cookies.get("accessToken");
  const navigate = useNavigate();
  const setImageUrl = (data) => {
    setUrl(data);
  };

  const handleCancel = () => {
    setTitle("");
    setYear("");
    setImageUrl(null)
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/movie/add`,
        {
          title: title,
          publishingYear: publishingYear,
          imageUrl: imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
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
      <h2 className="text-h3 mb-20 sm:text-h2">{heading}</h2>
      <div className="sm:max-h-[31.5rem] sm:max-w-[68rem] sm:gap-x-32 sm:grid sm:grid-cols-2 sm:grid-flow-row ">
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
        <FileUploadContainer getImageUrl={setImageUrl} url={imageUrl} />
        <div className="gap-4 flex sm:mt-14 ">
          <CancelButton handleCancel={handleCancel} />
          <SubmitButton handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AddUpdateMovie;
