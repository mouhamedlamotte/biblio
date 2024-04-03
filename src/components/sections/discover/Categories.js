import { filterBooksCategory, getBooks, getCategories } from '@/api/books'
import { BookCardCategory } from '@/components/card/BookCardCategory'
import { ShowBookAside } from '@/components/modals/ShowBookAside'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const Categories = () => {

  const [categories, setCategories] = useState()
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  const get_categories = async () => {
    setLoading(true)
    const data = await getCategories()
    if (data) {
      setCategories(data)}
      setLoading(false)
    }
    
    const get_books = async () => {
      setLoading(true)
      const data = await getBooks()
      if (data) {
        setBooks(data)
      }
      // setLoading(!loading)}
  }

  useEffect(() => {
    return () => {
      get_categories()
      get_books()
    };
  }, []);

  


  const [filter, setFilter] = useState("all")

  const handleChangeFilter = async (e) =>{
    setFilter(e.target.value)
    if (e.target.value == "all") {
      get_books()
    } else {
      const data = await filterBooksCategory(e.target.value)
      if (data) {
        setBooks(data)
      }
    }

  }

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
        <form className='py-3 flex gap-4 overflow-y-hidden overflow-x-scroll scrollbar-none'>
          <div>
              <label htmlFor='all' className={`py-1  px-2 font-semibold rounded-md  flex gap-1 items-center cursor-pointer ${ filter == "all" ? "bg-green-600" : "bg-gray-600" }`}>all</label>
              <input id='all' type="radio" className='hidden'
              value="all"
              onClick={handleChangeFilter} />
          </div>
            {
              categories?.map((category) =>{
                return (
                  <div key={category.id}>
                  <label htmlFor={category?.id} className={`py-1  px-2 font-semibold rounded-md truncate  flex gap-1 items-center cursor-pointer ${ filter == category?.id ? "bg-green-600" : "bg-gray-600" }`}>{category.name}</label>
                  <input id={category?.id} type="radio" className='hidden'  value={category?.id}
                  onClick={handleChangeFilter}
                  />
              </div>
                )
              })
            }

        </form>


          {
            books.length > 0 ? 
            (
            <div className='grid grid-cols-2 :grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-4 items-center'>
              {books.map((book) =>{
                return (
                  <BookCardCategory book={book} onclick={(e) =>{
                    setSelectedBook(book)
                  }} key={book.id} />
                )
              })}
            </div>
            ) : (
                <div className='flex justify-center flex-col w-full items-center'>
                  <Image src="/assets/images/empty_books.png" width={400} height={400} alt="ampty books" />
                  <h3 className='text-3xl font-semibold'>Aucun livre trouve pour cette categorie</h3>
                  </div>
              )
          }
    </div>
  )
}
