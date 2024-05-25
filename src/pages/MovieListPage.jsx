import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListHeader from "../components/ListHeader";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [errorMesssage, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const token = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");

  useEffect(() => {
    if (!token) {
      if (!refreshToken) {
        navigate("/", { replace: true });
      } else {
        try {
          const refershLogin = async () => {
            const response = await axios.post(
              `${import.meta.env.VITE_BASE_URL}/api/user/refresh-token`,
              {},
              { withCredentials: true }
            );
            console.log(response.data);
          };

          refershLogin();
        } catch (error) {
          console.log(error);
          setError(error.response.data.message);
        }
      }
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

  const getCurrentPage = (data) => {
    setCurrentPage(data);
  };

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
          <Pagination sendCurrentPage={getCurrentPage} />
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
