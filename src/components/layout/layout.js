import React, { useContext, useEffect, useState } from "react";
import { Aside } from "../includes/aside";
import { Navbar } from "../includes/navbar";
import { Loader } from "../includes/loader";
import Head from "next/head";
import { LoginModal } from "../modals/auth/LoginModal";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";





export const Layout =  ({ children, title }) => {


  const [showModal, setshowModal] = useState(true)

  const [isloading, setIsLoading] = useState(true)

  const [isdomloading, setisdomloading] = useState(true)

  const { user } = useContext(AuthContext)

  const router = useRouter()

  const [isAsideCollapsed, setIsAsideCollapsed] = useState(true)


  

  
  
  
  
  useEffect(() => {
    let TimeoutId = setTimeout(() => {
      if (!user){
        setshowModal(false)
      } 
      setisdomloading(false)
    }, 3000);
    return () => {
      clearTimeout(TimeoutId);
    };
  }, []);


  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Aside  isAsideCollapsed={isAsideCollapsed} setIsAsideCollapsed={setIsAsideCollapsed}/>

      <div className="md:ml-64  relative dark:bg-slate-900">
      {/* <LoginModal showModal={showModal} setshowModal={setshowModal} isdomloading={isdomloading} /> */}
        <Loader isloading={false} />
        <Navbar user={user}  setIsAsideCollapsed={setIsAsideCollapsed}/>
        <main className="py-4 md:p-4 flex flex-col gap-4">
          {children}</main>
      </div>
    </>
  );
};
