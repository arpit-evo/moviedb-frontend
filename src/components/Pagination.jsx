import React from 'react'

const Pagination = () => {
  return (
    <div className="body-regular w-fit items-center text-center flex gap-2 mx-auto mb-28">
      <div className="pr-2">Prev</div>
      <div className="primary p-1 rounded w-8">1</div>
      <div className="p-1 rounded card-bg w-8">2</div>
      <div className="pl-2">Next</div>
    </div>
  );
}

export default Pagination