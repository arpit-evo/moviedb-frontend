import React, { useState } from 'react'

const InputTag = ({type,placeholder}) => {

  const [value,setValue] = useState("")
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="h-11 w-[300px] rounded-lg input-bg p-4 :focus outline-none mb-6 block body-small "
      onChange={(e)=> setValue(e.target.value)}
    />
  );
}

export default InputTag