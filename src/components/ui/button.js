import React from 'react'

export const Button = ({title, className, icon, type="button", onclick}) => {
  return (
    <button 
    onClick={onclick}
    className={`bg-green-500 outline-none px-4 py-2 rounded-md font-medium hover:opacity-90 ${className}`}
    type={type}
    >
        {title}
        {icon}
    </button>
  )
}
