import React from "react";
import CancelButton from "../components/CancelButton";
import FileUploadContainer from "../components/FileUploadContainer";
import SubmitButton from "../components/SubmitButton";

const AddMoviePage = () => {
  return (
    <div className="p-30">
      <div>
        <h2 className="h2">Create a new movie</h2>
      </div>
      <div className="mt-30 h-[504px] flex gap-32">
        <FileUploadContainer />
        <div>
          <input
            type="text"
            placeholder="Title"
            className="h-11 w-[362px] rounded-lg input-bg p-4 :focus outline-none mb-6 block body-small "
          />
          <input
            type="number"
            placeholder="Publishing year"
            className="h-11 w-52 rounded-lg input-bg p-4 :focus outline-none mb-16 block body-small "
            maxLength="4"
          />
          <div className="gap-4 flex">
            <CancelButton />
            <SubmitButton />
          </div>
        </div>
      </div>
    </div>
  );
};
//
export default AddMoviePage;
