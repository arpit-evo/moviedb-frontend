import React from 'react'
import { CgAdd } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import FlexContainer from './FlexContainer';

const ListHeader = () => {
  return (
    <div className="flex justify-between mb-[7.5rem]">
      <FlexContainer>
        <h2 className="h2">My Movies</h2>
        <CgAdd className="text-[32px] mt-1" />
      </FlexContainer>
      <FlexContainer>
        <p className="body-regular">Logout</p>
        <MdLogout className="text-[32px]" />
      </FlexContainer>
    </div>
  );
}

export default ListHeader