import { Truncate } from "@/utils/truncate";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";


export const BookCardFlex = ({book}) => {
  return (
    <div className="p-2 bg-gray-600 hover:bg-green-800 cursor-pointer  flex  gap-1 md:gap-3 rounded-md [&_.hidden]:hover:flex">
      <div className="h-40 w-32 bg-slate-400 relative ">
      <div className="hidden justify-between absolute p-2  w-full">
          <button className={`p-1 bg-slate-950 rounded-md flex items-center justify-center z-50 ${ "liked" && "*:text-red-500" }`}
          
          onClick={(e)=>{
            // setLiked(!liked)
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
        <Image className="w-full h-full" 
        src={
          book?.banner != null ? book?.banner : "/assets/images/default_book_cover.png" }
          alt="book image"
          width={200}
          height={200}
        />
      </div>
      <div>
        <h6 className="font-bold text-md">
        <Truncate str={book?.name} max={20} len={20}  />

        </h6>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
          <p>        <Truncate str={book?.author} max={15} len={15}  />
</p>{" "}
          <div className="w-2 h-2 rounded-full  bg-slate-400"></div>{" "}
          <p>{book?.release_date}</p>
        </div>
        <div className="flex mt-1 items-center gap-1">
        <Icon icon="ph:star-fill" className="text-yellow-200" />
        <Icon icon="ph:star-fill" className="text-yellow-200" />
        <Icon icon="ph:star-fill" className="text-yellow-200" />
        <Icon icon="ph:star-fill" />
        <Icon icon="ph:star-fill" />
        <span className="font-bold">({book?.rate_count})</span>
        </div>

        <p className="text-xs font-bold mt-2 w-52">
          <Truncate str={book?.resume} max={100} len={100}  />

        </p>
      </div>
    </div>
  );
};
