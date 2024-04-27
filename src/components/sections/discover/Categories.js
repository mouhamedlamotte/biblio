import { filterBooksCategory, getBooks, getCategories } from '@/api/books'
import { BookCardCategory } from '@/components/card/BookCardCategory'
import { Loader } from '@/components/includes/loader'
import { ShowBookAside } from '@/components/modals/ShowBookAside'
import { SimpleCardSekeleton } from '@/components/skeletons/public/SimpleCard'
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
      // setLoading(false)
    }
    
    const get_books = async () => {
      setLoading(true)
      const data = await getBooks(12)
      setLoading(false)
      if (data) {
        setBooks(data)
      }
  }

  useEffect(() => {

    let categoriesDidMount = true

    if (categoriesDidMount) {
      get_categories()
    }

      get_categories()
      get_books()
    return () => {
      categoriesDidMount = false
    }
  }, []);

  


  const [filter, setFilter] = useState("all")

  const handleChangeFilter = async (e) =>{
    setLoading(true)
    setFilter(e.target.value)
    if (e.target.value == "all") {
      get_books()
    } else {
      const data = await getBooks(12, e.target.value)
      if (data) {
        setBooks(data)
      }
    }
    setLoading(false)

  }

  const [selectedBook, setSelectedBook] = useState(null)
  return (
    <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-sm overflow-hidden relative'>
      <ShowBookAside book={selectedBook} setBook={setSelectedBook} />
        <div className='flex justify-between items-center border-b border-gray-700 pb-4'>
        <h6 className='text-lg font-semibold'>Decouvrer les meilleures livre</h6>
        <button className='bg-slate-950 py-1 px-2 font-semibold rounded-md text-green-400 flex gap-1 items-center'>
            <Icon icon="solar:list-down-broken" />
        </button>
        </div>
        <form className='py-3 flex gap-4 overflow-y-hidden overflow-x-scroll scrollbar-none'>
          {
            categories && (
              <>
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
            </>
            )
          }


          {
            !categories && (
              <>
              
              {
                [1,2,3,4,5,6,7,8,9,10].map((category) =>{
                  return (
                   <div key={category} className='py-4 animate-pulse  px-12   font-semibold rounded-md  flex gap-1 items-center cursor-pointer bg-slate-600'></div>
                  )
                })
              }
              
              </>
            )
          }
          

        </form>
            {
              loading && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-4 items-center'>

                <SimpleCardSekeleton />
                <SimpleCardSekeleton />
                <SimpleCardSekeleton />
                <SimpleCardSekeleton />
                <SimpleCardSekeleton />
                <SimpleCardSekeleton />
                <SimpleCardSekeleton />
                <SimpleCardSekeleton />
                <SimpleCardSekeleton />
                <SimpleCardSekeleton />
                <SimpleCardSekeleton />
                <SimpleCardSekeleton />
                </div>
              )
            }

          {
            books && !loading &&
            (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-4 items-center'>
              {books.map((book) =>{
                return (
                  <BookCardCategory book={book} onclick={(e) =>{
                    setSelectedBook(book)
                  }} key={book.id} />
                )
              })}
            </div>
            )
          }

          {
            !loading && books?.length == 0 && (
              <div className={`flex justify-center flex-col w-full items-center h-[50vh]`}>
              <Image className={`${loading ? "hidden" : ""}`} src="/assets/images/empty_books.png" width={400} height={400} alt="ampty books" />
              <h3 className={`${loading ? "hidden" : ""} text-3xl font-semibold`}>Aucun livre trouve pour cette categorie</h3>
              </div>
            )
          }
    </div>
  )
}
