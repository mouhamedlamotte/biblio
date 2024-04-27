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

  const [books , setBooks] = useState(null)

  const [filterCategories, setFilterCategories] = useState(null)

  const [loading, setLoading] = useState(false)


  const [qtodisplay, setQtodisplay] = useState("")



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
    setLoading(true)
    if (!query) {
      setBooks(null)
      setLoading(false)
      return
    } 
    const data = await SearchBooks(query, category);
    if (data && typeof data === "object") {
      setBooks(data)
      setQtodisplay(query)
    }else{
      setBooks(null)
    }
    setLoading(false)
  }

  const get_q_param = () => {
    const q =  router.query.q
    if (q) {
      setQuery(q)
      search_books(q)
    }
    
  }

  const [recent_searches, setRecentSearches] = useState([])



  const getRecentSearches = () => {
    let rs = localStorage.getItem("recent_searches")
    if (rs) {
      rs = JSON.parse(rs)
      setRecentSearches(rs)

    }
  }


  const handlesetRecentSearches = (q) => {
    let rs = localStorage.getItem("recent_searches")
    if(q==="") return

    if (!rs) {
      rs = []
    } else {
      rs = JSON.parse(rs)
    }
    if (rs.includes(q)) {
      return
    }
    rs.push(q)
    localStorage.setItem("recent_searches", JSON.stringify(rs))
  }


  const deleteRecentSearches = (i) => {
    let rs = localStorage.getItem("recent_searches")
    if (rs) {
      rs = JSON.parse(rs)
      rs = rs.slice(0, i).concat(rs.slice(i + 1, rs.length))
      localStorage.setItem("recent_searches", JSON.stringify(rs))
    }
  }



  useEffect(  () => {
      get_q_param()
      get_gategories()
  }, []);


  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setRecentSearches([])
    handlesetRecentSearches(query)
    search_books(query, filterCategories);
  }


  const filterRecentSearche = (s)=>{
    let rs = localStorage.getItem("recent_searches")
    rs = JSON.parse(rs)
    let frs = rs.filter((r) => r.toLowerCase().includes(s.toLowerCase()))
    setRecentSearches(frs)
  }

  const handleChangeQuery = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  return (
    <Layout>
      <form

        onSubmit={handleSubmitSearch}
      >
          <div className="mb-2 p-4 bg-gray-800">

        <div className="w-full bg-slate-900 rounded-lg flex items-center px-3 relative">
          <input
            value={query}
            onChange={(e)=>{
              handleChangeQuery(e)
              if (e.target.value != ""){
                filterRecentSearche(e.target.value)
              }else{
                setRecentSearches([])
              }
              setQtodisplay(null)
            }}
            className="w-full flex-1 p-3  bg-transparent outline-none focus:outline group fill-transparent"
            placeholder="Rechercher un livre "
            name="q"
            autoComplete="off"
            onFocus={getRecentSearches}
            onBlur={(e)=>{
              // console.log(e);
            }}
          />
          <button type="submit">

          <Icon icon="ic:round-search" fontSize={35} className="text-white" />
          </button>
        <div className="absolute transition-all translate-y-2 scale-0 z-50 md:scale-100 ease-in duration-300 w-96 top-12  overflow-hidden bg-gray-700 rounded-b-md max-h-96 overflow-y-auto scrollbar-none">

          {
            recent_searches && recent_searches.map((r, i) => (
              <div key={r} className="p-2 hover:bg-gray-600 cursor-pointer flex justify-between  items-center w-full">
              <button
              type="button"
                className="w-full"
                  onClick={() => {
                    setQuery(r)
                    setRecentSearches([])
                    search_books(r)
                  }}
                  onKeyDownCapture={(e) => {
                    console.log(i);
                  }}
                >
                <div className="flex gap-2 items-center">
                <Icon icon="mdi:recent" />
                <p>{r}</p>
                </div>

              </button>
              <input className="text-xs text-red-500 cursor-pointer hover:underline" type="button" value="Supprimer" 
                            onClick={()=>{
                              deleteRecentSearches(i)
                              getRecentSearches()
                            }}
                />
              
              </div>
            ))
          }
        </div>  
        </div>
        </div>
        {/* <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-4"> */}
      </form>
        <div className="py-4 px-2 bg-gray-800 rounded-sm overflow-x-auto border-2  border-dashed border-gray-800 scrollbar-none flex gap-6">

          { 
            categories && (
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
            )
          }

          {
            categories.length == 0 && (
              <di className="flex justify-center items-center w-full">
              <div className="loader-s "></div>
              </di>
            )




          }
        </div>

      
          {
          books?.length > 0 && !loading ?  (
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-sm overflow-hidden" >
            <h6 className="text-lg font-semibold truncate">
              Resultat de recherche pour <span className="text-green-500">{query}</span> 
            </h6>
            <br/>
            <h6 className="text-lg font-semibold ">
               {filterCategories && <span> Catégorie : <span className="text-green-500">{filterCategories}</span></span>}
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
            books?.length === 0 && !loading && query && typeof books === "object" && qtodisplay &&(
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-sm">
              <h6 className="text-lg font-semibold">
                Aucun resultat pour <span className="text-green-500">{qtodisplay}</span> {filterCategories && <><br/><span> catégorie : <span className="text-green-500">{filterCategories}</span></span></>}
              </h6>
            </div>
            )
            
          )
        }

        {
           loading &&   (
            <div className="p-6 bg-gray-50 dark:bg-gray-800 flex justify-center items-center rounded-sm w-full">
                <div className="loader-s"></div>
            </div>
          )
        }
          


      {/* <Recommend /> */}
    </Layout>
  );
};

export default Search;
