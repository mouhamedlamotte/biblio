import { BookCardCategory } from '@/components/card/BookCardCategory'
import { ShowBookAside } from '@/components/modals/ShowBookAside'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'

export const Categories = () => {

  const books = [
    {
      "id" : 1,
      "title" : "Mind platter",
      "author" : "zebian"
    },
    {
      "id" : 2,
      "title" : "from the mixed up",
      "author" : "el konig"
    },
    {
      "id" : 3,
      "title" : "diambar",
      "author" : "aly"
    }
  ]

  const [selectedBook, setSelectedBook] = useState(null)
  return (
    <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-sm'>
      <ShowBookAside book={selectedBook} setBook={setSelectedBook} />
        <div className='flex justify-between items-center'>
        <h6 className='text-lg font-semibold'>Categories</h6>
        <button className='bg-slate-950 py-1 px-2 font-semibold rounded-md text-green-400 flex gap-1 items-center'>
            <Icon icon="solar:list-down-broken" />
        </button>
        </div>
        <form className='py-3 flex gap-4 overflow-y-hidden overflow-x-scroll srollbar-none'>
          <div>
              <label htmlFor='all' className='py-1 bg-green-800 px-2 font-semibold rounded-md  flex gap-1 items-center cursor-pointer'>all</label>
              <input id='all' type="radio" className='hidden' />
          </div>
            
          <div>
              <label htmlFor='all' className='py-1 bg-gray-600 px-2 font-semibold rounded-md  flex gap-1 items-center cursor-pointer'>Drame</label>
              <input id='all' type="radio" className='hidden' />
          </div>

        </form>
        <div className='grid grid-cols-2 :grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-4 items-center'>
          {
            books.map((book) =>{
              return (
                <BookCardCategory book={book} onclick={(e) =>{
                  setSelectedBook(book)
                }} key={book.id} />
              )
            })
          }
        </div>
    </div>
  )
}
