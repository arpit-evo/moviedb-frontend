import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-color min-h-screen  text-white">
      <Outlet />
      <img src="/Vectors.svg" className="w-full h-28 fixed bottom-0 mx-auto" />
    </div>
  );
};

export default MainLayout;
