import { Icon } from "@iconify/react";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-gray-50 dark:bg-gray-800 py-5 ">
      <div className="flex justify-between">
        <div className="bg-slate-200 dark:bg-slate-950 rounded-md flex items-center px-2">
        <Icon icon="ic:round-search" fontSize={30} />
          <input
            placeholder="Search"
            className="p-2 outline-none  bg-transparent rounded-md"
          />
        </div>
        <div className="flex items-center gap-4 mr-5">
        <Icon icon="mdi:bell" fontSize={30} />
        <Icon icon="mdi:cart" fontSize={30} />
          <div className="rounded-xl flex items-center px-2 gap-4">
            <div className="h-10 w-10 bg-slate-300 animate-pulse rounded-full"></div>
            <h4>Mouhamedbaba</h4>
            <Icon icon="ep:arrow-down-bold" />
          </div>
        </div>
      </div>
    </nav>
  );
};
