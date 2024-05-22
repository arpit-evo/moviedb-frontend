import React from "react";
import InputTag from "../components/InputTag";

const SignInPage = () => {
  return (
    <div className="text-center w-fit m-auto px-1 pt-[15.3%] ">
      <h1 className="h1 mb-10">Sign In</h1>
      <InputTag type={"text"} placeholder={"Email"} />
      <InputTag type={"password"} placeholder={"Password"} />
      <div className="flex w-fit gap-2 items-center mx-auto mb-6">
        <input type="checkbox" className="custom-checkbox" />
        <p className="body-small">Remember Me</p>
      </div>
      <button className="body-regular primary w-[300px] h-14 rounded-xl">
        Login
      </button>
    </div>
  );
};

export default SignInPage;
