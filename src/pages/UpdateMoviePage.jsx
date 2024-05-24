import React from 'react'
import CancelButton from '../components/CancelButton';
import SubmitButton from '../components/SubmitButton';
import FileUploadContainer from '../components/FileUploadContainer';

const UpdateMoviePage = () => {
  return (
    <div className="px-6 py-20 sm:p-30">
      <h2 className="text-h3 mb-20 sm:text-h2">Edit</h2>
      <div className="sm:max-h-[31.5rem] sm:max-w-[68rem] sm:gap-x-32 sm:grid sm:grid-cols-2 sm:grid-flow-row  ">
        <div className="sm:h-fit">
          <input
            type="text"
            placeholder="Title"
            className="h-11 w-full rounded-lg input-bg p-4  outline-none mb-6 block text-bs sm:max-w-[22.625rem] "
          />
          <input
            type="number"
            placeholder="Publishing year"
            className="h-11 w-full rounded-lg input-bg p-4 :focus outline-none mb-6  block text-bs sm:max-w-[13.5rem]"
            maxLength="4"
          />
        </div>
        <FileUploadContainer />
        <div className="gap-4 flex sm:mt-14 ">
          <CancelButton />
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default UpdateMoviePage