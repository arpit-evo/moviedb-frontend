import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axiosInstance from "../apis/axiosInstance";
import Dropdown from "../components/Dropdown";
import ListHeader from "../components/ListHeader";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { IoClose } from "react-icons/io5";
import { fast } from "@cloudinary/url-gen/qualifiers/FontAntialias";
import { ClipLoader } from "react-spinners";

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchCount, setSearchCount] = useState(Number);
  const [totalCount, setTotalCount] = useState(Number);
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");
  const [sortBy, setSortBy] = useState({ sort: "title", order: "asc" });
  const [loading, setLoading] = useState(false);
  const [reset, setReset] = useState(false);

  const navigate = useNavigate();

  const currentPage =
    Number(searchParams.get("page")) > 1 ? Number(searchParams.get("page")) : 1;

  const token = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `/api/movie/?page=${currentPage}&sort=${sortBy.sort},${sortBy.order}&search=${search}`
        );
        setMovieList(response.data.movies);
        setSearchCount(response.data.searchCount);
        setTotalCount(response.data.totalCount);
      } catch (error) {
        setError(error.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (refreshToken) {
      setTimeout(() => {
        fetchMovies();
      }, 500);
      setLoading(false);
    } else {
      setLoading(false);
      navigate("/sign-in");
    }
  }, [currentPage, token, refreshToken, search, sortBy]);

  const handleSelect = (key, option) => {
    setSortBy((prevSortBy) => ({
      ...prevSortBy,
      sort: key,
    }));
    setOption(option);
    setReset(true);
  };

  const handleOrderBtn = () => {
    setSortBy((prevSortBy) => ({
      ...prevSortBy,
      order: prevSortBy.order === "asc" ? "desc" : "asc",
    }));
    setReset(true);
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  const handleReset = () => {
    setOption("");
    setSearch("");
    setSortBy({ sort: "title", order: "asc" });
    setReset(false);
  };

  const override = {
    display: "block",
    margin: "0 auto",
    height: "50px",
    width: "50px",
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
                <Dropdown onselect={handleSelect} option={option} />
                <button
                  className="input-bg px-4 py-2 text-sm rounded-lg hover:bg-card"
                  onClick={handleOrderBtn}
                >
                  {sortBy.order.toUpperCase()}
                </button>
                {reset && (
                  <button
                    className="input-bg px-2 h-full text-sm rounded-lg hover:bg-card "
                    onClick={handleReset}
                  >
                    <IoClose className="text-2xl" />
                  </button>
                )}
              </div>
            </div>
            {loading ? (
              <div className="text-center">
                <ClipLoader
                  loading={loading}
                  color="#fff"
                  cssOverride={override}
                />
              </div>
            ) : movieList.length ? (
              <>
                <MovieList movies={movieList} />
                {errorMessage && (
                  <div className="text-red-500">{errorMessage}</div>
                )}
              </>
            ) : (
              <div className="text-bl text-center">Movies Not Found</div>
            )}
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
