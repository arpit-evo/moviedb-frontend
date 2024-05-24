import React from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {

  const navigate = useNavigate()

  return (
    <div className="text-center w-[23.75rem] sm:w-[18.75rem] m-auto ">
      <div className="mb-10 text-h2 sm:text-h1">Sign In</div>
      <input
        type={"text"}
        placeholder={"Email"}
        value={""}
        className="h-11 w-full rounded-lg input-bg p-4 :focus outline-none mb-6 block text-bs "
      
      />
      <input
        type={"password"}
        placeholder={"Password"}
        value={""}
        className="h-11 w-full rounded-lg input-bg p-4 :focus outline-none mb-6 block text-bs "
      
      />
      <div className="flex w-fit gap-2 items-center mx-auto mb-6">
        <input type="checkbox" className="custom-checkbox" />
        <p className="text-bs">Remember Me</p>
      </div>
      <button
        className="text-br primary w-full h-14 rounded-xl"
        onClick={() => navigate("/movie-list")}
      >
        Login
      </button>
    </div>
  );
};

export default SignInPage;
