import React from "react";
import { Aside } from "../includes/aside";
import { Navbar } from "../includes/navbar";
import { Warning } from "../modals/warning";
import { Loader } from "../includes/loader";

export const Layout = ({children}) => {
  return (
    <>


      <Aside />

      <div className="sm:ml-64 ">
        <Loader isloading={false} />
        <Navbar />
        <main className="p-4 flex flex-col gap-4">
        {children}
        </main>
      </div>
    </>
  );
};
