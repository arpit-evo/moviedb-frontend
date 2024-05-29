import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineFileDownload } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../apis/axiosInstance";

const AddUpdateMovie = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [publishingYear, setYear] = useState("");
  const [tempfileUrl, setTempUrl] = useState("");
  const [errorMesssage, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { id } = useParams();

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setFile(file);
    const fileUrl = URL.createObjectURL(event.target.files[0]);
    setTempUrl(fileUrl);
    setError("");
  };

  if (id) {
    useEffect(() => {
      const fetchMovieById = async () => {
        try {
          const response = await axiosInstance.get(`/api/movie/${id}`);
          setTitle(response.data.movie.title);
          setYear(response.data.movie.publishingYear);
          setTempUrl(response.data.movie.imageUrl);
        } catch (error) {
          setError(error.response.data.message);
        }
      };

      fetchMovieById();
    }, [id]);
  }

  useEffect(() => {
    console.log();
  }, [file]);

  const handleCancel = () => {
    setTitle("");
    setYear("");
    setTempUrl("");
  };

  const onSubmit = async () => {
    if (!tempfileUrl) {
      return setError("please upload image");
    }
    setIsLoading(true);
    try {
      if (id) {
        await axiosInstance.put(
          `/api/movie/update/${id}`,
          {
            title: title,
            publishingYear: publishingYear,
            file: file,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        await axiosInstance.post(
          `/api/movie/add`,
          {
            title: title,
            publishingYear: publishingYear,
            file: file,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
      navigate("/movie-list", { replace: true });
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-6 py-20 sm:p-30">
      <h2 className="text-h3 mb-20 sm:text-h2">
        {" "}
        {id ? "Edit" : "Create a new Movie"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:max-h-[31.5rem] sm:max-w-[68rem] sm:gap-x-32 sm:grid sm:grid-cols-2 sm:grid-flow-row ">
          {/* input elements */}
          <div className="sm:h-fit">
            <div className="mb-6">
              <input
                type="text"
                id="title"
                value={title}
                placeholder="Title"
                className={`h-11 w-full rounded-lg input-bg p-4 outline-none  block text-bs sm:max-w-[22.625rem] focus:border focus:${
                  errors.title ? "border-red-500" : "border-teal-700"
                } `}
                {...register("title", { required: "Title is required" })}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (errorMesssage || errors) {
                    setError("");
                    errors.title = "";
                  }
                }}
              />
              {errors.title && (
                <p className="text-red-500 text-bxs text-left mt-2">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <input
                type="number"
                placeholder="Publishing year"
                id="year"
                value={publishingYear}
                className={`h-11 w-full rounded-lg input-bg p-4 outline-none  block text-bs sm:max-w-[13.5rem] focus:border focus:${
                  errors.title ? "border-red-500" : "border-teal-700"
                } `}
                {...register("year", {
                  required: "Publishing year is required",
                  maxLength: { value: 4, message: "max length is 4" },
                })}
                onChange={(e) => {
                  setYear(e.target.value);
                  if (errorMesssage || errors) {
                    setError("");
                    errors.year = "";
                  }
                }}
              />
              {errors.year && (
                <p className="text-red-500 text-bxs text-left mt-2">
                  {errors.year.message}
                </p>
              )}
            </div>
            {errorMesssage && (
              <div className="text-red-500">{errorMesssage}</div>
            )}
          </div>
          {/* file uplad container */}
          <div
            className={`h-[23.25rem] w-full sm:max-w-[29.5625rem] sm:h-[31.5rem] input-bg  border-dashed
            border-white border-2 rounded-xl flex  items-center cursor-pointer z-10 mb-10 sm:row-span-3 sm:mb-0 sm:-order-2`}
            onClick={handleClick}
          >
            <input
              className="hidden"
              type="file"
              id="file"
              ref={inputRef}
              onChange={handleFileChange}
            />
            {tempfileUrl ? (
              <img
                src={tempfileUrl}
                className="w-full h-full rounded-xl object-cover"
              />
            ) : (
              <div className="bg-transparent m-auto">
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
              disabled={isLoading}
            >
              {!isLoading ? (
                "Submit"
              ) : (
                <>
                  <svg
                    className="animate-spin h-6 w-6 text-white inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-55"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-90"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>{" "}
                  Submit
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUpdateMovie;
