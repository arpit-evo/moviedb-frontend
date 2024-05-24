import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListHeader from "../components/ListHeader";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);

  return (
    <>
      {movieList.length ? (
        <>
          <div className="p-30">
            <ListHeader />
            <MovieList />
          </div>
          <Pagination />
        </>
      ) : (
        <div className="w-[23.75rem] sm:w-fit text-center m-auto ">
          <h2 className="h3 mb-10">Your movie list is empty</h2>
          <Link
            to="/add-movie"
            className="h-14 body-regular primary  px-7 py-4 rounded-xl inline-block w-full sm:w-[18.75rem]"
          >
            Add New Movie
          </Link>
        </div>
      )}
    </>
  );
};

export default MovieListPage;
