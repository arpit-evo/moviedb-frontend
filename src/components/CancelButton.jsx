import React from "react";

const CancelButton = ({ handleCancel }) => {
  const handleClick = () => {
    handleCancel();
  };

  return (
    <button
      className="w-full text-br border border-white py-4 rounded-xl sm:px-16 sm:w-fit sm:h-fit"
      type="reset"
      onClick={handleClick}
    >
      Cancel
    </button>
  );
};

export default CancelButton;
