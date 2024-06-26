import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ count, currentPage, onPageChange }) => {
  const [leftPagiNum, setLeftPagiNum] = useState(currentPage);
  const [rightPagiNum, setRightPagiNum] = useState(currentPage + 1);
  const [isPrimaryColor, setPrimaryColor] = useState(true);
  const totalPage = Math.ceil(count / 8);
  const handlePaginationBtn = (pageNum, e) => {
    if (e.target.innerHTML !== pageNum) {
      setPrimaryColor(!isPrimaryColor);
    }
    onPageChange(pageNum); // Update the current page state
  };

  const handlePrevBtn = () => {
    if (currentPage === 1) {
      setPrimaryColor(true);
    }

    setPrimaryColor(true);
    if (isPrimaryColor && leftPagiNum - 1 > 0) {
      setRightPagiNum(leftPagiNum);
      setLeftPagiNum(leftPagiNum - 1);
    }
  };

  const handleNextBtn = () => {
    if (rightPagiNum === 2) {
      setPrimaryColor(false);
    }

    setPrimaryColor(false);
    if (!isPrimaryColor) {
      setLeftPagiNum(rightPagiNum);
      setRightPagiNum(rightPagiNum + 1);
    }
  };

  return (
    <div className="body-regular w-fit items-center text-center flex gap-2 mx-auto mb-20 sm:mb-28">
      {currentPage - 1 > 0 ? (
        <Link
          to={`?page=${currentPage- 1}`}
          className="pr-2 cursor-pointer"
          onClick={handlePrevBtn}
        >
          Prev
        </Link>
      ) : (
        <span className="text-gray-400">Prev</span>
      )}
      <Link
        to={`?page=${leftPagiNum}`}
        className={`p-1 rounded w-8 cursor-pointer ${
          isPrimaryColor ? "primary" : "card-bg"
        }`}
        onClick={() => handlePaginationBtn(leftPagiNum)}
      >
        {leftPagiNum}
      </Link>
      <Link
        to={`?page=${rightPagiNum}`}
        className={`p-1 rounded w-8 cursor-pointer ${
          !isPrimaryColor ? "primary" : "card-bg"
        }`}
        onClick={(e) => handlePaginationBtn(rightPagiNum, e)}
      >
        {rightPagiNum}
      </Link>
      {currentPage + 1 <= totalPage ? (
        <Link
          to={`?page=${currentPage + 1}`}
          className="pl-2 cursor-pointer"
          onClick={handleNextBtn}
        >
          Next
        </Link>
      ) : (
        <span className="text-gray-400">Next</span>
      )}
    </div>
  );
};

export default Pagination;
