import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-color min-h-screen flex flex-col  text-white overflow-hidden">
      <main className="w-full max-w-screen-2xl flex flex-col flex-grow 2xl:mx-auto">
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
