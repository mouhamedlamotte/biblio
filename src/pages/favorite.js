import { BookCardFlex } from '@/components/card/bookCardFlex'
import { Layout } from '@/components/layout/layout'
import { Recommend } from '@/components/sections/discover/Recommend'
import React from 'react'

const Favorite = () => {
  return (
    <Layout >
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-sm">
        <h6 className="text-lg font-semibold">
          Mes favory
        </h6>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3   gap-3 mt-4">
          <BookCardFlex />
          <BookCardFlex />
          <BookCardFlex />
          <BookCardFlex />
          <BookCardFlex />
          <BookCardFlex />
          <BookCardFlex />
          <BookCardFlex />
          <BookCardFlex />
          <BookCardFlex />
        </div>
      </div>

      <Recommend />
    </Layout>
  )
}

export default Favorite