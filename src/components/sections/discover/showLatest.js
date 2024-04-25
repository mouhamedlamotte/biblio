import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { AuthContext } from "@/context/authContext";
import Image from "next/image";
import Carousel from "@/components/carousel";
import { BookCardCategory } from "@/components/card/BookCardCategory";
import { axiosInstance } from "@/api/base";

export const ShowLatest = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await axiosInstance.get("books?limit=5", );
    if (response.data) {
      setBooks(response.data);
    }
  };

  useEffect(() => {
    getBooks();
    console.log(books);
  }, []);

  const { user } = useContext(AuthContext);
  
  return (
    <div
      className={`p-6 bg-gray-50 dark:bg-gray-800 rounded-sm ${
        !user && "hidden"
      } `}
    >
      <div className="flex">
        <div className=" w-full lg:w-3/12 flex flex-col p-6 justify-between">
          <div>
            <h3 className="text-black dark:text-gray-50 text-3xl font-bold relative">
              Hello {user?.username} !
            </h3>
            <p className="mt-4">
              Selection des mellieurs livres <br /> pour vous
            </p>
          </div>
          <div className="mt-4">
          <Carousel autoSlide={true} autoSlideInterval={5000}>
  {books.slice(0, 40).map((book) => (
    <div key={book.id} className="w-full">
      <BookCardCategory book={book} />
    </div>
  ))}
</Carousel>
          </div>
            


          <Button title="Show latest" className="mt-4 " />
        </div>
        <div className="grow  hidden lg:flex  justify-center items-center w-full">
          <Image
            height={200}
            width={400}
            className=""
            alt="svg"
            src="/assets/images/rbg.svg"
          />
        </div>
      </div>
    </div>
  );
};
