import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = ({ onselect, option }) => {
  const [selectedOption, setSelectedOption] = useState(option);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (event) => {
    setSelectedOption(option);
    setIsOpen(false);
    onselect(event.target.getAttribute("data-key"), event.target.innerText);
  };

  useEffect(() => {
    setSelectedOption(option);
  }, [option,onselect]);

  return (
    <div className="w-fit">
      <button
        className={`inline-flex justify-between items-center input-bg px-4 py-2 text-sm w-[10.625rem] hover:bg-card ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || "Sort By"}
        {isOpen ? (
          <IoIosArrowUp className="text-xl " />
        ) : (
          <IoIosArrowDown className="text-xl " />
        )}
      </button>
      {isOpen && (
        <ul className="absolute z-10 bg-card rounded-b-lg text-center w-[10.625rem]">
          <li
            data-key={"title"}
            className="cursor-pointer border-y border-teal-900 px-4 py-1 hover:bg-teal-900"
            onClick={handleOptionClick}
          >
            Title
          </li>
          <li
            data-key={"publishingYear"}
            className="cursor-pointer  border-b border-teal-900 px-4 py-1 hover:bg-teal-900"
            onClick={handleOptionClick}
          >
            Publishibg Year
          </li>
          <li
            data-key={"createdAt"}
            className="cursor-pointer px-4 py-1 hover:bg-teal-900"
            onClick={handleOptionClick}
          >
            CreatedAt
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
