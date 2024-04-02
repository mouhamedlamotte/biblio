import { BookCardSimple } from '@/components/card/bookCardSimple'
import { Icon } from '@iconify/react'
import React from 'react'

export const Recommend = () => {
  return (
    <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-sm'>
        <div className='flex justify-between'>
        <h6 className='text-lg font-semibold'>Vous pouriez aime</h6>
        <button className='bg-slate-950 py-1 px-2 font-semibold rounded-md text-green-400 flex gap-1 items-center'>
            see all
            <Icon icon="ep:arrow-right-bold" />
        </button>
        </div>
        <div className='grid grid-cols-2 :grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-4 items-center'>
            <BookCardSimple />
            <BookCardSimple />
            <BookCardSimple />
            <BookCardSimple />
            <BookCardSimple />
            <BookCardSimple />
        </div>
    </div>
  )
}