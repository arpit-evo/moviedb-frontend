import React from 'react'

const MovieList = () => {
  return (
    <div className='mx-auto w-fit text-center py-[25%]'>
      <h2 className='h2 mb-10'>Your movie list is empty</h2>
      <button className='body-regular primary px-7 py-4 rounded-xl'>Add New Movie</button>
    </div>
  );
}

export default MovieList