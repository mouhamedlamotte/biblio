import React from 'react'

export const Loader = ({isloading}) => {
  return (
    <div className={`w-full h-screen overflow-hidden absolute bg-slate-700 opacity-60 justify-center items-center ${isloading ? "flex" : "hidden"}`}>
        <div className='loader'></div>
    </div>
  )
}

