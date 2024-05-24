import React from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {

  const navigate = useNavigate()

  return (
    <div className="text-center w-[23.75rem] sm:w-[18.75rem] m-auto ">
      <div className="mb-10 h2 sm:text-64 sm:leading-80">Sign In</div>
      <input
        type={"text"}
        placeholder={"Email"}
        value={""}
        className="h-11 w-full rounded-lg input-bg p-4 :focus outline-none mb-6 block body-small "
      
      />
      <input
        type={"password"}
        placeholder={"Password"}
        value={""}
        className="h-11 w-full rounded-lg input-bg p-4 :focus outline-none mb-6 block body-small "
      
      />
      <div className="flex w-fit gap-2 items-center mx-auto mb-6">
        <input type="checkbox" className="custom-checkbox" />
        <p className="body-small">Remember Me</p>
      </div>
      <button
        className="body-regular primary w-full h-14 rounded-xl"
        onClick={() => navigate("/movie-list")}
      >
        Login
      </button>
    </div>
  );
};

export default SignInPage;
