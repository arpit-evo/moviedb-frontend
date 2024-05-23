import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListHeader from "../components/ListHeader";
import MovieList from "../components/MovieList";

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([""]);

  return (
    <>
      {movieList.length ? (
        <div className="p-[7.5rem]">
          <ListHeader />
          <MovieList />
        </div>
      ) : (
        <div className="mx-auto w-fit text-center pt-[22.5%] ">
          <h2 className="h2 mb-10">Your movie list is empty</h2>
          <Link
            to="/add-movie"
            className="h-14 body-regular primary  px-7 py-4 rounded-xl inline-block"
          >
            Add New Movie
          </Link>
        </div>
      )}
    </>
  );
};

export default MovieListPage;
