import React from 'react'

export const BookCardSimple = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-600 rounded-md w-48 overflow-hidden  cursor-pointer'>
      <div className='h-60 w-full bg-white p-6'>
      <img className="w-full h-full shadow-2xl" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519632815i/37706596.jpg" />
      </div>
      <div className='p-2'>
          <h4 className='font-semibold text-md truncate'>From the mixed up files</h4>
          <p className='text-sm mt-1 font-medium text-gray-300'>El Konigsburg</p>
      </div>
    </div>
  )
}
