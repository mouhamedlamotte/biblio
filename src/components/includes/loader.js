import React from 'react'

export const Loader = ({isloading}) => {
  return (
    <div className={`w-full absolute h-full overflow-hidden  justify-center items-center ${isloading ? "flex" : "hidden"}`}>
        <div className='loader'></div>
    </div>
  )
}

