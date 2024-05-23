import React from 'react'

const MovieCard = () => {
  return (
    <div className="w-[17.625rem] card-bg p-2 rounded-xl cursor-pointer">
      <div className="h-[25rem] w-full rounded-xl mb-4">
        <img
          src="/toy story-1.jpg"
          alt="movie poster"
          className="object-cover h-full w-full rounded-xl"
        />
      </div>
      <div className="gap-2 p-2">
        <div className="body-large">Movie 1</div>
        <div className="body-small">2021</div>
      </div>
    </div>
  );
}

export default MovieCard