import React from 'react'

const SubmitButton = ({ text = "Submit" }) => {
  return (
    <button
      type="submit"
      className="text-br w-full primary py-4  rounded-xl sm:px-20 sm:w-fit sm:h-fit"
    >
      {text}
    </button>
  );
};

export default SubmitButton