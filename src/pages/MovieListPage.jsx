import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListHeader from "../components/ListHeader";
import MovieList from "../components/MovieList";

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [errorMesssage, setError] = useState("");
  const [leftPagiNum, setLeftPagiNum] = useState(1);
  const [rightPagiNum, setRightPagiNum] = useState(2);
  const [isPrimaryColor, setPrimaryColor] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const token = Cookies.get("accessToken");

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    } else {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/movie/?page=${currentPage}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setMovieList(response.data.movies);
        } catch (error) {
          console.log(error);
          setError(error.response.data.message);
        }
      };
      fetchMovies();
    }
  }, [currentPage]);

  // pagination logic

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

  const  handlePaginationBtn = (e) => {
    setPrimaryColor(!isPrimaryColor)
    setCurrentPage(+e.target.innerHTML);
  } 

  return (
    <>
      {movieList.length ? (
        <>
          <div className="px-6 py-20 sm:p-30">
            <ListHeader />
            <MovieList movies={movieList} />
            {errorMesssage && (
              <div className="text-red-500">{errorMesssage}</div>
            )}
          </div>
          {/* Pagination  */}
          <div className="body-regular w-fit items-center text-center flex gap-2 mx-auto mb-20 sm:mb-28">
            <div className="pr-2" onClick={handlePrevBtn}>
              Prev
            </div>
            <div
              className={`p-1 rounded w-8 ${
                isPrimaryColor ? "primary" : "card-bg"
              }`}
              onClick={handlePaginationBtn}
            >
              {leftPagiNum}
            </div>
            <div
              className={`p-1 rounded w-8 ${
                !isPrimaryColor ? "primary" : "card-bg"
              }`}
              onClick={handlePaginationBtn}
            >
              {rightPagiNum}
            </div>
            <div className="pl-2" onClick={handleNextBtn}>
              Next
            </div>
          </div>
        </>
      ) : (
        <div className="w-[23.75rem] sm:w-fit text-center m-auto ">
          <h2 className="text-h3 mb-10 sm:text-h2">Your movie list is empty</h2>
          <Link
            to="/add-movie"
            className="h-14 text-br primary py-4 rounded-xl inline-block w-full sm:px-10 sm:w-fit"
          >
            Add New Movie
          </Link>
        </div>
      )}
    </>
  );
};

export default MovieListPage;
