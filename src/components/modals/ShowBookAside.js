import { Truncate } from "@/utils/truncate";
import { Icon } from "@iconify/react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const ShowBookAside = ({ book, setBook }) => {
  return (
    <>
      {book && (
        <div className="fixed top-0 right-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-slate-950 rounded ">
            <div className="absolute flex  top-4  -left-4">
                <button className=" p-2 rounded-lg bg-green-500 hover:opacity-85 hover:mr-2" 
                onClick={(e) =>{
                    setBook(null)
                }}
                >

            <Icon icon="ep:arrow-right-bold" fontSize={15} />
                </button>
            </div>
          <div className="p-10 flex justify-center items-center flex-col  overflow-y-auto overflow-x-hidden h-full scrollbar-none">
            <div className="h-60 w-full bg-white p-2 rounded-md ">
              <Image
                className="w-full h-full shadow-2xl"
                width={200}
                height={200}
                src={
                book?.banner != null ? book?.banner : "/assets/images/default_book_cover.png" }
                alt="book image"
              />
            </div>
            <div className="p-2 mt-3">
              <h4 className="font-semibold text-md text-center truncate">
              <Truncate str={book.name} max={30} len={30} />
              </h4>
              <p className="text-sm mt-1 font-medium text-gray-300 text-center truncate">
                {book.author}
              </p>
            </div>
            <div className="flex mt-1 items-center gap-1">
              <Icon icon="ph:star-fill" className="text-yellow-200" />
              <Icon icon="ph:star-fill" className="text-yellow-200" />
              <Icon icon="ph:star-fill" className="text-yellow-200" />
              <Icon icon="ph:star-fill" />
              <Icon icon="ph:star-fill" />
              <span className="font-bold">(3.2)</span>
            </div>

            <div className="flex mt-10">
              <div className="text-center px-4">
                <h3 className="text-lg">{book.page_number}</h3>
                <p className="text-xs">pages</p>
              </div>
              <div className="text-center border-x-2 px-4 border-gray-500">
                <h3 className="text-lg">320</h3>
                <p className="text-xs">pages</p>
              </div>
              <div className="text-center px-4">
                <h3 className="text-lg">320</h3>
                <p className="text-xs">pages</p>
              </div>
            </div>
            <p className="text-xs text-center font-bold mt-10 text-gray-200">
              <Truncate
                str={
                  book.resume
                }
                max={300}
                len={300}
              />
            </p>
            <Button title={"Loan Now"} className={"mt-10"} />
          </div>
        </div>
      )}
    </>
  );
};
