import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";

export const BookCardCategory = ({book, onclick}) => {

  const [liked, setLiked] = useState(false)

  return (
    <div className="bg-gray-50 dark:bg-gray-600 rounded-md w-full overflow-hidden  cursor-pointer hover:bg-green-800"
    onClick={onclick}
    >
      <div className="h-60 w-ful p-2 relative *:hover:flex">
        <div className=" justify-between absolute p-2 pr-6 w-full hidden">
          <button className={`p-1 bg-slate-950 rounded-md flex items-center justify-center z-50 ${ liked && "*:text-red-500" }`}
          
          onClick={(e)=>{
            setLiked(!liked)
          }}

          >
            <Icon
              icon="material-symbols-light:favorite"
              fontSize={20}
              className=""
            />
          </button>
          <div className="p-1 bg-slate-950 rounded-md flex items-center justify-center">
            <Icon
              icon="ph:star-fill"
              fontSize={20}
              className="text-yellow-400 dark:group-hover:text-white"
            />
            <span className="text-sm">48</span>
          </div>
        </div>
        <Image width={100} height={100}
          className="w-full h-full rounded-md"
          src={
            book?.banner != null ? book?.banner : "/assets/images/default_book_cover.png" }
            alt="book image"  
        />
      </div>
      <div className="p-2">
        <h4 className="font-semibold text-md truncate">
          {book?.name}
        </h4>
        <p className="text-sm mt-1 font-medium text-gray-300">{book?.author}</p>
      </div>
    </div>
  );
};
