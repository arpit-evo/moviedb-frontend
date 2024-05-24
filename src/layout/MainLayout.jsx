import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-color min-h-screen flex flex-col  text-white">
      <main className="flex flex-grow">
        <Outlet />
      </main>
      <footer>
        <img src="/Vectors.svg" className="w-full hidden sm:block" />
        <img src="/sm-vectors.svg" className="w-full sm:hidden" />
      </footer>
    </div>
  );
};

export default MainLayout;
