import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { Link, useSearchParams } from "react-router-dom";
import axiosInstance from "../apis/axiosInstance";
import Dropdown from "../components/Dropdown";
import ListHeader from "../components/ListHeader";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchCount, setSearchCount] = useState(Number);
  const [totalCount, setTotalCount] = useState(Number);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState({ sort: "title", order: "asc" });

  const handleSelect = (key) => {
    setSortBy((prevSortBy) => ({
      ...prevSortBy,
      sort: key,
    }));
  };

  const handleOrderBtn = (e) => {
    setSortBy((prevSortBy) => ({
      ...prevSortBy,
      order: prevSortBy.order === "asc" ? "desc" : "asc",
    }));
  };

  const currentPage = Number(searchParams.get("page")) || 1;

  const token = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/movie/?page=${currentPage}&sort=${sortBy.sort},${sortBy.order}&search=${search}`
        );
        setMovieList(response.data.movies);
        setSearchCount(response.data.searchCount);
        setTotalCount(response.data.totalCount);
      } catch (error) {
        setError(error.response?.data?.message || "An error occurred");
      }
    };
    setTimeout(() => {
      if (search === "") {
        setSortBy({ sort: "title", order: "asc" });
      }

      fetchMovies();
    }, 1000);
  }, [currentPage, token, refreshToken, search, sortBy]);

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  return (
    <>
      {totalCount > 0 ? (
        <>
          <div className="px-6 py-20 sm:p-30">
            <ListHeader />
            <div className="mb-10 flex justify-between">
              <div className="flex items-center input-bg rounded-lg  max-w-[22rem] focus:bg-card">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent h-9 w-full  rounded-lg p-2 outline-none text-bs "
                  onChange={(e) => setSearch(e.target.value)}
                />
                <RiSearchLine className="text-2xl mx-2" />
              </div>
              <div className="flex items-center text-center gap-3">
                <Dropdown onselect={handleSelect} search={search} />
                <button
                  className="input-bg px-4 py-2 text-sm rounded-lg hover:bg-card"
                  onClick={handleOrderBtn}
                >
                  {sortBy.order.toUpperCase()}
                </button>
              </div>
            </div>
            {movieList.length ? (
              <MovieList movies={movieList} />
            ) : (
              <div className="text-bl text-center">Movies Not Found</div>
            )}
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          </div>
          <Pagination
            count={searchCount}
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
