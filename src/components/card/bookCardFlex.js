import { Truncate } from "@/utils/truncate";
import { Icon } from "@iconify/react";
import React from "react";

export const BookCardFlex = () => {
  return (
    <div className="p-2 bg-gray-600 hover:bg-green-800 cursor-pointer  flex gap-2 rounded-md">
      <div className="h-40 w-32 bg-slate-400 ">
        <img className="w-full h-full" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519632815i/37706596.jpg" />
      </div>
      <div>
        <h6 className="font-bold text-md">From the mixed up files</h6>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
          <p>El Konigsburg</p>{" "}
          <div className="w-2 h-2 rounded-full  bg-slate-400"></div>{" "}
          <p>March 1998</p>
        </div>
        <div className="flex mt-1 items-center gap-1">
        <Icon icon="ph:star-fill" className="text-yellow-200" />
        <Icon icon="ph:star-fill" className="text-yellow-200" />
        <Icon icon="ph:star-fill" className="text-yellow-200" />
        <Icon icon="ph:star-fill" />
        <Icon icon="ph:star-fill" />
        <span className="font-bold">(3.2)</span>
        </div>

        <p className="text-xs font-bold mt-2 w-52">
          <Truncate str={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptatem eveniet quisquam totam natus animi sint tempore atque ea distinctio sunt doloribus sit sequi veniam officia fugiat eaque laboriosam vel."} max={100} len={100}  />

        </p>
      </div>
    </div>
  );
};
