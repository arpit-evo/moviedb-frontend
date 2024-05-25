import React from "react";
import { CgAdd } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import FlexContainer from "./FlexContainer";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ListHeader = () => {
  const navigate = useNavigate();

  const handlelogout = () => {
    Cookies.remove("accessToken")
    Cookies.remove("refreshToken")
    navigate("/",{replace:true})
  }

  return (
    <div className="flex justify-between mb-20 sm:mb-30">
      <FlexContainer>
        <h2 className="text-h3 sm:text-h2">My Movies</h2>
        <CgAdd
          className="text-2xl sm:text-[32px] sm:mt-1 cursor-pointer"
          onClick={() => navigate("/add-movie")}
        />
      </FlexContainer>
      <FlexContainer>
        <p className="hidden sm:block sm:text-br">Logout</p>
        <MdLogout className="text-2xl sm:text-[32px]" onClick={handlelogout} />
      </FlexContainer>
    </div>
  );
};

export default ListHeader;
