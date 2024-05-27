import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center text-br sm:text-bl m-auto">
      <div className="mb-5">Page Not Found</div>
      <Link className="primary px-10 py-4 rounded-xl" to={"/"}>
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
