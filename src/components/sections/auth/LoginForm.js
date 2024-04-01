import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'

export const LoginForm = ({icon, setShowModal, showModal, uid, pid}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    

    const handdleClose = (e) =>{
        console.log('ok', "ok")
    }

  return (
    
    <form  className="p-6 bg-gray-50  dark:bg-gray-900 rounded-md w-full sm:w-96  ">
        {
            icon && (

        <div className='flex justify-end'>
        <button type="button" className=" text-gray-400 bg-transparent inline-flex hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal"
        onClick={handdleClose}
        >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
        </div>
            )
        }
    <div className="p-4 flex justify-center items-center">
      <Link href='/' className="text-3xl ">
        Bi<span className="font-bold text-green-500">Blio</span>
      </Link>
    </div>
    <div className="mt-5 flex flex-col gap-2">
      <label htmlFor={uid}className="font-bold">
        Username
      </label>
      <input
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
      value={username}
        type="text"
        placeholder="username"
        name={uid}
        id={uid}
        className="bg-slate-700 p-2 rounded-md border-none focus:border focus w-full focus:border-green-500 outline-none"
      />
    </div>
    <div className="mt-5 flex flex-col gap-2">
      <label htmlFor={pid} className="font-bold">
        Password
      </label>
      <input
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
        console.log(password);
      }}
        type="password"
        name={pid}
        id={pid}
        placeholder="**********"
        className="bg-slate-700 p-2 rounded-md border-none focus:border focus w-full focus:border-green-500 outline-none"
      />
      <a href="#hh" className=" text-xs text-red-500 text-end">
        Mot de passe oublie ?
      </a>
    </div>
    <div className="flex justify-center mt-5">
      <Button type="sumbit" title={"Se connecter"} />
    </div>
    <div className="flex justify-center mt-5">
      <p>pas de compte ?<a href="#hh" className="ms-2 text-green-500 text-end">
        creer un compte
        </a> </p>

    </div>
  </form>
  )
}
