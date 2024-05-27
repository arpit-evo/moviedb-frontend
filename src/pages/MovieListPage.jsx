import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ListHeader from "../components/ListHeader";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const navigate = useNavigate();
  const token = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");

  useEffect(() => {
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
        setError(error.response?.data?.message || "An error occurred");
      }
    };

    fetchMovies();
  }, [currentPage, token, refreshToken, navigate]);

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  return (
    <>
      {movieList.length ? (
        <>
          <div className="px-6 py-20 sm:p-30">
            <ListHeader />
            <MovieList movies={movieList} />
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          </div>
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <div className="w-[23.75rem] sm:w-fit text-center m-auto ">
          <h2 className="text-h3 mb-10 sm:text-h2">Your movie list is empty</h2>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <Link
            to="/add"
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
