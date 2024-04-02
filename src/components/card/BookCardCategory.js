import { Icon } from "@iconify/react";
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
        <img
          className="w-full h-full shadow-2xl rounded-md"
          src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519632815i/37706596.jpg"
        />
      </div>
      <div className="p-2">
        <h4 className="font-semibold text-md truncate">
          {book?.title}
        </h4>
        <p className="text-sm mt-1 font-medium text-gray-300">{book?.author}</p>
      </div>
    </div>
  );
};
