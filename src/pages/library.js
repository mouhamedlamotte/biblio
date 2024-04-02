import { BookCardCategory } from "@/components/card/BookCardCategory";
import { Layout } from "@/components/layout/layout";
import { ShowBookAside } from "@/components/modals/ShowBookAside";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const Library = () => {
  const books = [
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

  const [filter, setFilter] = useState("all");

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
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
        <div>
            <label
              htmlFor="all"
              className={`py-2  px-5 font-semibold rounded-md  flex gap-1 items-center cursor-pointer ${
                filter == "all" ? "bg-green-600" : "bg-gray-600"
              }`}
            >
              Tous
            </label>
            <input
              id="all"
              type="radio"
              className="hidden"
              value="all"
              onClick={handleChangeFilter}
            />
          </div>

          <div>
            <label
              htmlFor="loaned"
              className={`py-2  px-5 font-semibold rounded-md  flex gap-1 items-center cursor-pointer ${
                filter == "loaned" ? "bg-green-600" : "bg-gray-600"
              }`}
            >
              Empruntes
            </label>
            <input
              id="loaned"
              type="radio"
              className="hidden"
              value="loaned"
              onClick={handleChangeFilter}
            />
          </div>
          <div>
            <label
              htmlFor="finished"
              className={`py-2  px-5 font-semibold rounded-md  flex gap-1 items-center cursor-pointer ${
                filter == "back" ? "bg-green-600" : "bg-gray-600"
              }`}
            >
              Rendu
            </label>
            <input
              id="finished"
              type="radio"
              className="hidden"
              value="back"
              onClick={handleChangeFilter}
            />
          </div>
          <div>
            <label
              htmlFor="asked"
              className={`py-2  px-5 font-semibold rounded-md  flex gap-1 items-center cursor-pointer ${
                filter == "asked" ? "bg-green-600" : "bg-gray-600"
              }`}
            >
              Demandes
            </label>
            <input
              id="asked"
              type="radio"
              className="hidden"
              value="asked"
              onClick={handleChangeFilter}
            />
          </div>


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
          {books.map((book) => {
            return (
              <BookCardCategory
                book={book}
                onclick={(e) => {
                  console.log(book.title);
                }}
                key={book.id}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Library;
