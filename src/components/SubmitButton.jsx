import React from 'react'

const SubmitButton = ({ handleSubmit,text = "Submit" }) => {
  const handleClick = () => {
    handleSubmit();
  };
  return (
    <button
      type="submit"
      className="text-br w-full primary py-4  rounded-xl sm:px-20 sm:w-fit sm:h-fit"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default SubmitButton