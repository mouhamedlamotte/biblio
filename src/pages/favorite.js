import { getFavoriteBooks } from "@/api/books";
import { BookCardFlex } from "@/components/card/bookCardFlex";
import { Layout } from "@/components/layout/layout";
import { Recommend } from "@/components/sections/discover/Recommend";
import { SimpleCardSekeleton } from "@/components/skeletons/public/SimpleCard";
import { AuthContext } from "@/context/authContext";
import { ProtectedRouteWrapper } from "@/security/ProtectedRoute";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const Favorite = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true)


  const [books, setBooks] = useState([]);
  const router = useRouter();

  const get_favorites = async () => {
    const data = await getFavoriteBooks(user?.id);
    if (data) {
      setBooks(data);
    }
    setLoading(false)
  };

  useEffect(() => {
    get_favorites();
  }, [router]);

  return (
    <ProtectedRouteWrapper>
    <Layout title={"Mes favory"}>
      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-sm">
        <div className="border-b border-gray-700 pb-4 flex items-center justify-between">
        <h6 className="text-lg font-semibold">Mes favory</h6>
        <Icon icon="mdi:cards-heart"  fontSize={25} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3   gap-3 mt-4">
          {books?.map((book) => (
            <BookCardFlex key={book.id} book={book} />
          ))}
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

        </div>
        {
               !loading && books.length == 0 && 
                
                <div className="p-4 flex justify-center items-center w-full h-[20vh]">
                  <h3 className="text-center font-bold text-xl">Aucun livre n&apos;est enregistre</h3>
                </div>
              }
      </div>

    </Layout>
    </ProtectedRouteWrapper>
  );
};

export default Favorite;
