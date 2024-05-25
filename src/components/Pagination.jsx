import React, { useEffect, useState } from "react";

const Pagination = ({ sendCurrentPage }) => {
  const [leftPagiNum, setLeftPagiNum] = useState(1);
  const [rightPagiNum, setRightPagiNum] = useState(2);
  const [isPrimaryColor, setPrimaryColor] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevBtn = () => {
    if (leftPagiNum === 1) {
      setPrimaryColor(true);
      setCurrentPage(leftPagiNum);
    }

    setPrimaryColor(true);
    if (isPrimaryColor && leftPagiNum - 1 > 0) {
      setRightPagiNum(leftPagiNum);
      setLeftPagiNum(leftPagiNum - 1);
    }
    if (leftPagiNum - 1 > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextBtn = () => {
    if (rightPagiNum === 2) {
      setPrimaryColor(false);
      setCurrentPage(rightPagiNum);
    }

    setPrimaryColor(false);
    if (!isPrimaryColor) {
      setLeftPagiNum(rightPagiNum);
      setRightPagiNum(rightPagiNum + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePaginationBtn = (e) => {
    setPrimaryColor(!isPrimaryColor);
    setCurrentPage(+e.target.innerHTML);
  };

  useEffect(() => {
    sendCurrentPage(currentPage);
  }, [currentPage]);

  return (
    <div className="body-regular w-fit items-center text-center flex gap-2 mx-auto mb-20 sm:mb-28">
      <div className="pr-2" onClick={handlePrevBtn}>
        Prev
      </div>
      <div
        className={`p-1 rounded w-8 ${isPrimaryColor ? "primary" : "card-bg"}`}
        onClick={handlePaginationBtn}
      >
        {leftPagiNum}
      </div>
      <div
        className={`p-1 rounded w-8 ${!isPrimaryColor ? "primary" : "card-bg"}`}
        onClick={handlePaginationBtn}
      >
        {rightPagiNum}
      </div>
      <div className="pl-2" onClick={handleNextBtn}>
        Next
      </div>
    </div>
  );
};

export default Pagination;
