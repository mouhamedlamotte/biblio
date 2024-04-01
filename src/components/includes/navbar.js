import { Icon } from "@iconify/react";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-gray-50 dark:bg-gray-800 py-5 px-2 lg:px-0">
      <div className="flex justify-between items-center">
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        className="sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
        <div className="bg-slate-200 dark:bg-slate-950 rounded-md flex items-center px-2">
        <Icon icon="ic:round-search" fontSize={30} className="text-gray-500" />
          <input
          autoComplete="off"
            placeholder="Rechercher un livre "
            className="p-2 outline-none  bg-transparent rounded-md"
          />
        </div>
        <div className="flex items-center gap-4 mr-5">
        <Icon className="hidden lg:block"  icon="mdi:bell" fontSize={30} />
        <Icon className="hidden lg:block"  icon="mdi:cart" fontSize={30} />
          <div className="rounded-xl flex items-center px-2 gap-4">
            <div className="h-10 w-10 bg-slate-300 animate-pulse rounded-full"></div>
            <h4 className="hidden lg:block">Mouhamedbaba</h4>
            <Icon className="hidden lg:block" icon="ep:arrow-down-bold" />
          </div>
        </div>
      </div>
    </nav>
  );
};
