import { getUserLoans } from "@/api/loans";
import { BookCardCategory } from "@/components/card/BookCardCategory";
import { Layout } from "@/components/layout/layout";


import { SimpleCardSekeleton } from "@/components/skeletons/public/SimpleCard";
import { AuthContext } from "@/context/authContext";
import { ProtectedRouteWrapper } from "@/security/ProtectedRoute";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Library = () => {


  const [seletectStatus, setSeletectStatus] = useState("dans votre bibliotheque");

  const status = [
    {
      id: 1,
      title: "Tous",
      code : "All"
    },
    {
      id: 2,
      title: "Demandes",
      code : "Pending"
    },
    {
      id: 3,
      title: "Emprunts",
      code : "Confirmed"
    },
    {
      id: 4,
      title: "Rendu",
      code : "Returned"
    }
  ]


  


  const [books , setBooks] = useState([])

  const [loading, setLoading] = useState(true)

  const { user } = useContext(AuthContext)
  
  const [filter, setFilter] = useState("All");

  const router =  useRouter()



  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
            if (filter == "All") {
                const data = await getUserLoans(user?.id);
                setBooks(data || []);
                return
            }
            const data = await getUserLoans(user?.id, filter);
            setBooks(data || []);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, [user, filter]);

const handleChangeFilter = (e) => {
    
    setFilter(e.target.value);
};





  return (
    <ProtectedRouteWrapper>

    <Layout >
            <form
        method="get"
        action="/search"
        onSubmit={(e) => {
          // e.preventDefault()
        }}
      >
        <div className="w-full bg-gray-800 rounded-md flex items-center px-3 ">
          <input

            className="w-full flex-1 p-4  bg-transparent outline-none focus:outline group"
            placeholder="Rechercher un livre dans votre librairy"
            name="q"
          />
          <Icon icon="ic:round-search" fontSize={35} className="text-white" />
        </div>
        {/* <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-4"> */}
        <div className="py-4 px-2 mt-2 rounded-sm overflow-x-auto border-2  border-dashed border-gray-800 scrollbar-none flex gap-6">
          {
            status.map((item) => (
              <div key={item.id}>
              <label
              htmlFor={item.code}
              className={`py-2  px-5 font-semibold rounded-md  flex gap-1 items-center cursor-pointer ${
                filter == item.code ? "bg-green-600" : "bg-gray-600"
              }`}
            >
              {item.title}
            </label>
            <input
              id={item.code}
              type="radio"
              className="hidden"
              value={item.code}
              onClick={handleChangeFilter}
              name={item.title}
            />
            </div>
            ))
          }

        </div>
      </form>
      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-sm">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <h6 className="text-lg font-semibold ">Ma Library</h6>
          <button className="bg-slate-950 py-1 px-2 font-semibold rounded-md text-green-400 flex gap-1 items-center">
            <Icon icon="solar:list-down-broken" />
          </button>
        </div>
        <div className="grid grid-cols-2 :grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 mt-4 items-center">
              {
                loading && (
                  <>
                  
                  <SimpleCardSekeleton /> 
                  <SimpleCardSekeleton /> 
                  <SimpleCardSekeleton /> 
                  <SimpleCardSekeleton /> 
                  <SimpleCardSekeleton /> 
                  <SimpleCardSekeleton /> 
                  </>
                )
              }

              {
                books && !loading  && books.map((book) => <BookCardCategory key={book.id} book={book?.book_copy?.book} />)
              }


              
        </div>
              {
                !loading && books.length == 0 && 
                
                <div className="p-4 flex justify-center items-center w-full h-[20vh]">
                  <h3 className="text-center font-bold text-xl">Aucun livre  {seletectStatus}</h3>
                </div>
              }
      </div>
    </Layout>
    </ProtectedRouteWrapper>
  );
};

export default Library;
