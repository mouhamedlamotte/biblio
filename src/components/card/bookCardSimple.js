import React from 'react'

export const BookCardSimple = () => {

  const colors = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-teal-200",
    "bg-orange-200",
    "bg-indigo-200",
    "bg-gray-200",
    "bg-lime-200",
    "bg-cyan-200",
    "bg-fuchsia-200",
  ]
  return (
    <div className='bg-gray-50 dark:bg-gray-600 rounded-md w-full xs:bg-red-400 overflow-hidden  cursor-pointer'>
      <div className={`h-60 w-full bg-lime-100 p-6 ${colors[Math.floor(Math.random() * colors.length)]}`}>
      <img className="w-full h-full shadow-2xl" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519632815i/37706596.jpg" />
      </div>
      <div className='p-2'>
          <h4 className='font-semibold text-md truncate'>From the mixed up files</h4>
          <p className='text-sm mt-1 font-medium text-gray-300'>El Konigsburg</p>
      </div>
    </div>
  )
}

