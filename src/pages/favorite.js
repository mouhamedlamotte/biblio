import { getFavoriteBooks } from '@/api/books'
import { BookCardFlex } from '@/components/card/bookCardFlex'
import { Layout } from '@/components/layout/layout'
import { Recommend } from '@/components/sections/discover/Recommend'
import { AuthContext } from '@/context/authContext'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

const Favorite = () => {

  const { user } = useContext(AuthContext)

  const [books , setBooks] = useState([])
  const router = useRouter()
  
  const get_favorites = async () => {
    if (!user) return
    const data = await getFavoriteBooks(user?.id)
    if (data) {
      setBooks(data)
      console.log(data);
    }
  }

  useEffect(() => {
    return () => {
      get_favorites()
    };
  }, [router]);




  return (
    <Layout title={"Mes favory"} >
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-sm">
        <h6 className="text-lg font-semibold">
          Mes favory
        </h6>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3   gap-3 mt-4">
          {
            books?.map((book) => (
              <BookCardFlex key={book.id} book={book} />
            ))
          }
        </div>
      </div>

      <Recommend />
    </Layout>
  )
}

export default Favorite