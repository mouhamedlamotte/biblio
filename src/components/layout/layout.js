import React from "react";
import { Aside } from "../includes/aside";
import { Navbar } from "../includes/navbar";
import { Loader } from "../includes/loader";
import Head from "next/head";

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Aside />

      <div className="sm:ml-64 ">
        <Loader isloading={false} />
        <Navbar />
        <main className="p-4 flex flex-col gap-4">{children}</main>
      </div>
    </>
  );
};
