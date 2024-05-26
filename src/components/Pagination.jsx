// import React, { useEffect, useState } from "react";

// const Pagination = ({ sendCurrentPage }) => {
//   const [leftPagiNum, setLeftPagiNum] = useState(1);
//   const [rightPagiNum, setRightPagiNum] = useState(2);
//   const [isPrimaryColor, setPrimaryColor] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePaginationBtn = (e) => {
//     setPrimaryColor(!isPrimaryColor);
//     setCurrentPage(+e.target.innerHTML);
//   };

//   useEffect(() => {
//     sendCurrentPage(currentPage);
//   }, [currentPage]);

//   return (
//     <div className="body-regular w-fit items-center text-center flex gap-2 mx-auto mb-20 sm:mb-28">
//       <div className="pr-2 cursor-pointer" onClick={handlePrevBtn}>
//         Prev
//       </div>
//       <div
//         className={`p-1 rounded w-8 cursor-pointer ${isPrimaryColor ? "primary" : "card-bg"}`}
//         onClick={handlePaginationBtn}
//       >
//         {leftPagiNum}
//       </div>
//       <div
//         className={`p-1 rounded w-8 cursor-pointer ${!isPrimaryColor ? "primary" : "card-bg"}`}
//         onClick={handlePaginationBtn}
//       >
//         {rightPagiNum}
//       </div>
//       <div className="pl-2 cursor-pointer" onClick={handleNextBtn}>
//         Next
//       </div>
//     </div>
//   );
// };

// export default Pagination;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, onPageChange }) => {
  const [leftPagiNum, setLeftPagiNum] = useState(currentPage);
  const [rightPagiNum, setRightPagiNum] = useState(currentPage + 1);
  const [isPrimaryColor, setPrimaryColor] = useState(true);

  useEffect(() => {
    // if (!isPrimaryColor) {
    //   setLeftPagiNum(currentPage);
    //   setRightPagiNum(currentPage + 1);
    // }
    // setPrimaryColor(true);
  }, [currentPage]);

  const handlePaginationBtn = (pageNum, isPrev = false, isNext = false) => {
    if (pageNum === 1) {
      setPrimaryColor(true);
      setLeftPagiNum(pageNum);
      setRightPagiNum(pageNum + 1);
    } else if (isPrev) {
      setPrimaryColor(true);
      if (isPrimaryColor && leftPagiNum - 1 > 0) {
        setRightPagiNum(pageNum + 1);
        setLeftPagiNum(pageNum);
      }
    } else if (isNext) {
      if (pageNum === 2 && leftPagiNum < pageNum) {
        setPrimaryColor(false);
      }
      setPrimaryColor(false);
      if (!isPrimaryColor) {
        setLeftPagiNum(rightPagiNum);
        setRightPagiNum(rightPagiNum + 1);
      }
    }
    onPageChange(pageNum); // Update the current page state
  };

  // const handlePrevBtn = () => {
  //   if (currentPage === 1) {
  //     setPrimaryColor(true);
  //   }

  //   setPrimaryColor(true);
  //   if (isPrimaryColor && leftPagiNum - 1 > 0) {
  //     setRightPagiNum(leftPagiNum);
  //     setLeftPagiNum(leftPagiNum - 1);
  //   }
  // };

  // const handleNextBtn = () => {
  //   if (rightPagiNum === 2) {
  //     setPrimaryColor(false);
  //     setCurrentPage(rightPagiNum);
  //   }

  //   setPrimaryColor(false);
  //   if (!isPrimaryColor) {
  //     setLeftPagiNum(rightPagiNum);
  //     setRightPagiNum(rightPagiNum + 1);
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  const handlePrevBtn = () => {
    if (leftPagiNum > 1) {
      handlePaginationBtn(leftPagiNum - 1, true);
    }
  };

  const handleNextBtn = () => {
    handlePaginationBtn(rightPagiNum);
  };

  return (
    <div className="body-regular w-fit items-center text-center flex gap-2 mx-auto mb-20 sm:mb-28">
      <Link
        to={`?page=${leftPagiNum - 1 > 0 ? leftPagiNum - 1 : ""}`}
        className="pr-2 cursor-pointer"
        onClick={handlePrevBtn}
      >
        Prev
      </Link>
      <Link
        to={`?page=${leftPagiNum}`}
        className={`p-1 rounded w-8 cursor-pointer ${
          isPrimaryColor ? "primary" : "card-bg"
        }`}
        onClick={() => handlePaginationBtn(leftPagiNum, true)}
      >
        {leftPagiNum}
      </Link>
      <Link
        to={`?page=${rightPagiNum}`}
        className={`p-1 rounded w-8 cursor-pointer ${
          !isPrimaryColor ? "primary" : "card-bg"
        }`}
        onClick={() => handlePaginationBtn(rightPagiNum, false, true)}
      >
        {rightPagiNum}
      </Link>
      <Link
        to={`?page=${rightPagiNum + 1}`}
        className="pl-2 cursor-pointer"
        onClick={handleNextBtn}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
