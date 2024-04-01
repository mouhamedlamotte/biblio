import React from 'react'
import { Button } from '../../ui/button'

export const ShowLatest = () => {
  return (
    <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-sm' >
      <div className='flex'>
        <div className=''>
          <h3 className='text-black dark:text-gray-50 text-2xl font-bold'>Hello Mouhamed baba !</h3>
          <p>Selection des mellieurs livres <br/> pour vous</p>
          <Button title="Show latest" className="mt-4" />
        </div>
        <div className='grow flex justify-center items-center slbg'>
          {/* <img className='h-40 w-40' alt='svg' src='/assets/images/rb.jpg' /> */}
        </div>
      </div>
    </div>
  )
}
