import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      Cookies.set("accessToken",response.data.accessToken)
      // Cookies.set("refreshToken",response.data.refreshToken)
      console.log();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="text-center w-[23.75rem] sm:w-[18.75rem] m-auto ">
      <div className="mb-10 text-h2 sm:text-h1">Sign In</div>
      <input
        type={"email"}
        placeholder={"Email"}
        value={email}
        name="email"
        required
        className="h-11 w-full rounded-lg input-bg p-4 :focus outline-none mb-6 block text-bs "
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type={"password"}
        name="password"
        placeholder={"Password"}
        value={password}
        required
        className="h-11 w-full rounded-lg input-bg p-4 :focus outline-none mb-6 block text-bs "
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex w-fit gap-2 items-center mx-auto mb-6">
        <input type="checkbox" className="custom-checkbox" />
        <p className="text-bs">Remember Me</p>
      </div>
      <button
        className="text-br primary w-full h-14 rounded-xl"
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  );
};

export default SignInPage;
