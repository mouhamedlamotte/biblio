import React, { useContext } from 'react'
import { Button } from '../../ui/button'
import { AuthContext } from '@/context/authContext'

export const ShowLatest = () => {

  const { user } = useContext(AuthContext)


  return (
    <div className={`p-6 bg-gray-50 dark:bg-gray-800 rounded-sm ${!user && "hidden"} `} >
      <div className='flex'>
        <div className=''>
          <h3 className='text-black dark:text-gray-50 text-2xl font-bold'>Hello {user?.username} !</h3>
          <p>Selection des mellieurs livres <br/> pour vous</p>
          <Button title="Show latest" className="mt-4" />
        </div>
        <div className='grow flex justify-center items-center'>
          {/* <img className='h-40 w-40' alt='svg' src='/assets/images/rb.jpg' /> */}
        </div>
      </div>
    </div>
  )
}
