import { BookCardCategory } from '@/components/card/BookCardCategory'
import { Icon } from '@iconify/react'
import React from 'react'

export const Categories = () => {
  return (
    <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-sm'>
        <div className='flex justify-between items-center'>
        <h6 className='text-lg font-semibold'>Categories</h6>
        <button className='bg-slate-950 py-1 px-2 font-semibold rounded-md text-green-400 flex gap-1 items-center'>
            <Icon icon="solar:list-down-broken" />
        </button>
        </div>
        <div className='py-3 flex gap-4 overflow-y-hidden overflow-x-scroll srollbar-none'>
        <button className='py-1 bg-green-800 px-2 font-semibold rounded-md  flex gap-1 items-center'>
            all
        </button>
        <button className='bg-gray-600 py-1 px-2 font-semibold rounded-md  flex gap-1 items-center'>
            Drame
        </button>

        </div>
        <div className='grid grid-cols-6 gap-1 mt-4 items-center'>
                <BookCardCategory />
                <BookCardCategory />
                <BookCardCategory />
                <BookCardCategory />
                <BookCardCategory />
                <BookCardCategory />
        </div>
    </div>
  )
}
