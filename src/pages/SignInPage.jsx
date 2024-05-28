import Cookies from "js-cookie";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../apis/axiosInstance";
import {
  ACCESS_TOKEN_EXPIRE_TIME,
  REFRESH_TOKEN_EXPIRE_TIME_LONG,
  REFRESH_TOKEN_EXPIRE_TIME_SHORT,
} from "../globalVar";

const SignInPage = ({ refreshAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMesssage, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(
        "/api/user/login",
        {
          email: email,
          password: password,
          rememberMe: rememberMe,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      Cookies.set("accessToken", response.data.accessToken, {
        expires: ACCESS_TOKEN_EXPIRE_TIME,
      });
      Cookies.set("refreshToken", response.data.refreshToken, {
        expires: rememberMe
          ? REFRESH_TOKEN_EXPIRE_TIME_LONG
          : REFRESH_TOKEN_EXPIRE_TIME_SHORT,
      });

      refreshAuth();
      navigate("/movie-list");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center w-[23.75rem] sm:w-[18.75rem] m-auto ">
      <div className="mb-10 text-h2 sm:text-h1">Sign In</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <input
            type={"email"}
            placeholder={"Email"}
            value={email}
            id="email"
            className={`h-11 w-full rounded-lg input-bg p-4 outline-none  block text-bs focus:border focus:border-teal-700  ${
              errors.email && "focus:border-red-500"
            } `}
            {...register("email", { required: "Email is required" })}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors || errorMesssage) {
                setError("");
                errors.email = "";
              }
            }}
          />
          {errors.email && (
            <p className="text-red-500 text-bxs text-left mt-2">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <input
            type="password"
            id="password"
            placeholder={"Password"}
            value={password}
            className={`h-11 w-full rounded-lg input-bg p-4 outline-none  block text-bs focus:border focus:border-teal-700 ${
              errors.password && "focus:border-red-500"
            } `}
            {...register("password", {
              required: "Password is required",
              minLenght: 6,
            })}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errorMesssage || errors) {
                setError("");
                errors.password = "";
              }
            }}
          />
          {errors.password && (
            <p className="text-red-500 text-bxs text-left mt-2">
              {errors.password.message}
            </p>
          )}
        </div>
        {/* checkbox */}
        <label className="flex w-fit items-center text-center cursor-pointer mx-auto gap-2 text-bs mb-7">
          <div className="relative h-5">
            <input
              type="checkbox"
              className={`appearance-none w-5 h-5 rounded-md cursor-pointer ${
                rememberMe ? "primary" : "input-bg"
              }`}
              checked={rememberMe}
              onChange={() => {
                setRememberMe(!rememberMe);
              }}
            />
            <svg
              className={`absolute w-4 h-4 text-white top-[3px] ${
                rememberMe ? "visible" : "invisible"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M19.707,2.293c0.391,0.391,0.391,1.023,0,1.414l-10,10c-0.391,0.391-1.023,0.391-1.414,0l-5-5c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L9,11.586L18.293,2.293C18.684,1.902,19.316,1.902,19.707,2.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          Remeber Me
        </label>
        {errorMesssage && <div className="text-red-500">{errorMesssage}</div>}
        <button
          className="text-br primary w-full h-14 rounded-xl"
          type="submit"
          disabled={isLoading}
        >
          {!isLoading ? (
            "Login"
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
              Login
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
