import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-color min-h-screen flex flex-col  text-white">
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer>
        <img src="/Vectors.svg" className="w-full h-28 mx-auto" />
      </footer>
    </div>
  );
};

export default MainLayout;
