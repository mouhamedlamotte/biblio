import { SearchBooks, getCategories } from "@/api/books";
import { BookCardFlex } from "@/components/card/bookCardFlex";
import { Layout } from "@/components/layout/layout";
import { Recommend } from "@/components/sections/discover/Recommend";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


const Search = () => {
  const router = useRouter();


  
  const [query, setQuery] = useState("");

  const [books , setBooks] = useState([])

  const [filterCategories, setFilterCategories] = useState(null)

  const colors = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-teal-200",
    "bg-orange-200",
    "bg-indigo-200",
    "bg-gray-200",
    "bg-lime-200",
    "bg-cyan-200",
    "bg-fuchsia-200",
  ]


  const [categories, setCategories] = useState([])


  const get_gategories = async () => {
    const data = await getCategories()
    if (data) {
      setCategories(data)
    }
  }




  
  const search_books = async (query, category=null) => {
    const data = await SearchBooks(query, category);
    if (data && typeof data === "object") {
      setBooks(data)
    }else{
      setBooks([])
    }
  }

  const get_q_param = () => {
    const q =  router.query.q
    if (q) {
      setQuery(q)
      search_books(q)
    }
  }






  useEffect(  () => {
      get_q_param()
      get_gategories()
  }, []);

  const handleChangeQuery = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    search_books(e.target.value, filterCategories);
  };
  return (
    <Layout>
      <form
        method="get"
        action="/search"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className="w-full bg-gray-800 rounded-md flex items-center px-3 ">
          <input
            value={query}
            onChange={handleChangeQuery}
            className="w-full flex-1 p-4  bg-transparent outline-none focus:outline group"
            placeholder="Rechercher un livre "
            name="q"
          />
          <Icon icon="ic:round-search" fontSize={35} className="text-white" />
        </div>
        {/* <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-4"> */}
        <div className="py-4 px-2 mt-2 rounded-sm overflow-x-auto border-2  border-dashed border-gray-800 scrollbar-none flex gap-6">

          {
            categories?.map((category) => (
              <div className="flex flex-col gap-1" key={category.id}>
              <input 
                
                className={`bg-blue-200 hover:opacity-90 cursor-pointer rounded-2xl py-3 px-6 text-black font-medium ${colors[Math.floor(Math.random() * colors.length)]}`}
                type="submit"
                name="category"
                value={category.name}
                onClick={() =>{
                  if (category.name === filterCategories) {
                    setFilterCategories(null)
                    search_books(query)

                  } else{
                    setFilterCategories(category.name)
                    search_books(query, category.name)
                  }
                }}
              />
              <div className={`w-full border border-green-800 ${filterCategories == category.name ? "block" : "hidden"}`}></div>
              </div>
              
            ))
          }
        </div>
      </form>

      
          {
          books?.length > 0 ? (
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-sm">
            <h6 className="text-lg font-semibold">
              Resultat de recherche pour <span className="text-green-500">{query}</span> {filterCategories && <span> , catégorie : <span className="text-green-500">{filterCategories}</span></span>}
            </h6>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3   gap-3 mt-4">

            {
              books?.map((book) => (
                <BookCardFlex key={book.id} book={book} />
              ))
            }

            </div>
            </div>
          ) : 
          (
            query?.length > 0 &&(
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-sm">
              <h6 className="text-lg font-semibold">
                Aucun resultat pour <span className="text-green-500">{query}</span> {filterCategories && <span> , catégorie : <span className="text-green-500">{filterCategories}</span></span>}
              </h6>
            </div>
            )
            
          )
        }
          


      {/* <Recommend /> */}
    </Layout>
  );
};

export default Search;
