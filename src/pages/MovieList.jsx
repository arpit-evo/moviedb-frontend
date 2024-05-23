import React, { useState } from "react";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  return (
    <>
      {movieList.length ? (
        <div></div>
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

export default MovieList;
