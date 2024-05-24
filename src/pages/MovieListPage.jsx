import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListHeader from "../components/ListHeader";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([""]);

  return (
    <>
      {movieList.length ? (
        <>
          <div className="px-6 py-20 sm:p-30">
            <ListHeader />
            <MovieList />
          </div>
          <Pagination />
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
