import { getUserLoans } from "@/api/loans";
import { BookCardCategory } from "@/components/card/BookCardCategory";
import { Loader } from "@/components/includes/loader";
import { Layout } from "@/components/layout/layout";
import { ShowBookAside } from "@/components/modals/ShowBookAside";
import { SimpleCardSekeleton } from "@/components/skeletons/public/SimpleCard";
import { AuthContext } from "@/context/authContext";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Library = () => {
  const booksp = [
    {
      id: 1,
      title: "Mind platter",
      author: "zebian",
    },
    {
      id: 2,
      title: "from the mixed up",
      author: "el konig",
    },
    {
      id: 3,
      title: "diambar",
      author: "aly",
    },
    {
      id: 4,
      title: "diambar",
      author: "aly",
    },
    {
      id: 5,
      title: "diambar",
      author: "aly",
    },
    {
      id: 6,
      title: "diambar",
      author: "aly",
    },
    {
      id: 7,
      title: "diambar",
      author: "aly",
    },
    {
      id: 8,
      title: "diambar",
      author: "aly",
    },
    {
      id: 9,
      title: "diambar",
      author: "aly",
    },
    {
      id: 10,
      title: "diambar",
      author: "aly",
    },
    {
      id: 11,
      title: "diambar",
      author: "aly",
    },
  ];

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
      code : "Active"
    },
    {
      id: 4,
      title: "Rendu",
      code : "Finished"
    }
  ]


  const [curentStatus, setCurrentStatus] = useState("All");


  const [books , setBooks] = useState([])

  const [loading, setLoading] = useState(true)

  const { user } = useContext(AuthContext)
  
  const [filter, setFilter] = useState("all");

  const router =  useRouter()

  const get_books = async () => {
    setLoading(true)
    console.log(user);
    try {
      const data = await getUserLoans(user?.id)
      if (data) {
        console.log(data);
        setBooks(data)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    get_books()
  }, []);


  const handleFilter = async () => {
    setLoading(true)
    try {
      if( filter === "All") {
        const data = await getUserLoans(user?.id)
        if (data) {
          setBooks(data)
        }
      } else {
        const data = await getUserLoans(user?.id, filter)
        if (data) {
          setBooks(data)
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleFilter()
  }, [filter]);

  const handleChangeFilter = (e) => {
    setLoading(true)
    setFilter(e.target.value);
    console.log(filter);
  };

  return (
    <Layout>
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
            />
            </div>
            ))
          }

        </div>
      </form>
      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-sm">
        <div className="flex justify-between items-center">
          <h6 className="text-lg font-semibold">Ma Library</h6>
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

              {
                !loading && books.length == 0 && <p className="text-center">Aucun livre dans votre library</p>
              }

              
        </div>
      </div>
    </Layout>
  );
};

export default Library;
