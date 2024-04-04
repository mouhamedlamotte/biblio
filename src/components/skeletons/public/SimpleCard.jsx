import React from 'react'

export const SimpleCardSekeleton = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-600 rounded-md w-full xs:bg-red-400 overflow-hidden  cursor-pointer'>
      <div className=" h-64 w-full  p-6 ">
        <div className='w-full h-full bg-gray-300 animate-pulse shadow-2xl rounded-md'></div>
      </div>
      <div className='p-2'>
          <h4 className='font-semibold text-md truncate h-2.5 w-40 bg-gray-200 animate-pulse rounded-full'></h4>
          <p className='text-sm mt-2 font-medium bg-gray-300  animate-pulse rounded-full h-2 w-24 '></p>
      </div>
    </div>
  )
}
