import React from 'react'

const SubmitButton = ({ text = "Submit" }) => {
  return (
    <button
      type="submit"
      className="body-regular primary py-4 px-14 rounded-xl"
    >
      {text}
    </button>
  );
};

export default SubmitButton