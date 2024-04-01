import { Icon } from "@iconify/react";
import React from "react";

export const BookCardCategory = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-600 rounded-md w-48 overflow-hidden  cursor-pointer">
      <div className="h-60 w-ful p-2 relative">
        <div className="flex justify-between absolute p-2 pr-6 w-full">
          <button className="p-1 bg-slate-950 rounded-xl flex items-center justify-center">
            <Icon
              icon="material-symbols-light:favorite"
              fontSize={15}
              className="text-red-400 dark:group-hover:text-white"
            />
          </button>
          <div className="p-1 bg-slate-950 rounded-xl flex items-center justify-center">
            <Icon
              icon="ph:star-fill"
              fontSize={15}
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
          From the mixed up files
        </h4>
        <p className="text-sm mt-1 font-medium text-gray-300">El Konigsburg</p>
      </div>
    </div>
  );
};
