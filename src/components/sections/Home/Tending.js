import React from 'react'
import { BookCardFlex } from '../../card/bookCardFlex'

export const Tending = () => {
  return (
    <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-sm'>
        <h6 className='text-lg font-semibold'>Tend</h6>
        <div className='grid grid-cols-3 gap-3 mt-4'>
        <BookCardFlex />
        <BookCardFlex />
        <BookCardFlex />
        </div>
    </div>
  )
}
