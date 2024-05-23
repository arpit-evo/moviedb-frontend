import React from 'react'

const FlexContainer = ({children}) => {
  return <div className="w-fit flex items-center gap-3">{children}</div>;
}

export default FlexContainer