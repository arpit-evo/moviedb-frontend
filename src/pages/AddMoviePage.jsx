import React, { useEffect } from "react";
import Cookies from "js-cookie";
import AddUpdateMovie from "../components/AddUpdateMovie";
import { useNavigate } from "react-router-dom";

const AddMoviePage = () => {
  // const token = Cookies.get("accessToken");
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/");
  //   }
  // }, [token]);

  return <AddUpdateMovie heading={"Create a new movie"} />;
};

export default AddMoviePage;
