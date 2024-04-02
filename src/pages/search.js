import { BookCardFlex } from "@/components/card/bookCardFlex";
import { Layout } from "@/components/layout/layout";
import { Recommend } from "@/components/sections/discover/Recommend";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Search = () => {
  const router = useRouter();

  const [query, setQuery] = useState("");

  useEffect(() => {
    return () => {
      setQuery(router.asPath.split("=")[1]?.split("&")[0]?.replace("+", " "));
    };
  }, [router]);

  const handleChangeQuery = (e) => {
    setQuery(e.target.value);
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
          <input
            className=" bg-blue-200 hover:opacity-90 cursor-pointer rounded-2xl py-3 px-6 text-black font-medium"
            type="submit"
            name="category"
            value={"Romance"}
          />
          <input
            className=" bg-rose-200 hover:opacity-90 cursor-pointer rounded-2xl py-3 px-6 text-black font-medium"
            type="submit"
            name="category"
            value={"Drame"}
          />
          <input
            className=" bg-yellow-200 hover:opacity-90 cursor-pointer rounded-2xl py-3 px-6 text-black font-medium"
            type="submit"
            name="category"
            value={"Aventure"}
          />
          <input
            className=" bg-pink-200 hover:opacity-90 cursor-pointer rounded-2xl py-3 px-6 text-black font-medium"
            type="submit"
            name="category"
            value={"Fiction"}
          />
          <input
            className=" bg-purple-200 hover:opacity-90 cursor-pointer rounded-2xl py-3 px-6 text-black font-medium"
            type="submit"
            name="category"
            value={"Action"}
          />
          <input
            className=" bg-green-200 hover:opacity-90 cursor-pointer rounded-2xl py-3 px-6 text-black font-medium"
            type="submit"
            name="category"
            value={"Thriller"}
          />
          <input
            className=" bg-orange-200 hover:opacity-90 cursor-pointer rounded-2xl py-3 px-6 text-black font-medium"
            type="submit"
            name="category"
            value={"Nature"}
          />
          <input
            className=" bg-lime-200 hover:opacity-90 cursor-pointer rounded-2xl py-3 px-6 text-black font-medium"
            type="submit"
            name="category"
            value={"Science"}
          />
          <input
            className=" bg-amber-200 hover:opacity-90 cursor-pointer rounded-2xl py-3 px-6 text-black font-medium"
            type="submit"
            name="category"
            value={"Animaux"}
          />
        </div>
      </form>

      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-sm">
        <h6 className="text-lg font-semibold">
          Resultat de recherche pour {query}
        </h6>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3   gap-3 mt-4">
          <BookCardFlex />
          <BookCardFlex />
          <BookCardFlex />
        </div>
      </div>

      <Recommend />
    </Layout>
  );
};

export default Search;
