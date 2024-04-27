import { LoginUser } from '@/api/base'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export const LoginForm = ({nextPath = "/", setIsloading}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const [pwitype, setPwitype] = useState("password")
    


    const handleSubmit = async (e) => {
      e.preventDefault()
      setIsloading(true)
      const user = {
          username, password
      }
      const response = await LoginUser(user)
      if (response) {
          router.push(nextPath)
      }else{
          toast.error("Identifiant incorrect")
          setIsloading(false)
      }
  }
  return (
    
    <form  className="p-6 bg-gray-50  dark:bg-gray-900 rounded-md w-full sm:w-96  " onSubmit={handleSubmit}>
      
    <div className="p-4 flex justify-center items-center">
      <Link href='/' className="text-3xl ">
        Bi<span className="font-bold text-green-500">Blio</span>
      </Link>
    </div>
    <div className="mt-5 flex flex-col gap-2">
      <label htmlFor="username" className="font-bold">
        Username
      </label>
      <input
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
      value={username}
        type="text"
        placeholder="username"
        name="username"
        id="username"
        className="bg-slate-700 p-2 rounded-md border-none focus:border focus w-full focus:border-green-500 outline-none"
      />
    </div>
    <div className="mt-5 flex flex-col gap-2">
      <label htmlFor="password" className="font-bold">
        Password
      </label>
      <div className='relative'>
      <input
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
        type={pwitype}
        name="password"
        id="password"
        placeholder="password"
        className="bg-slate-700 p-2 rounded-md border-none focus:border focus w-full focus:border-green-500 outline-none"
      />
      <button
            onClick={(e)=>{
              setPwitype(pwitype === "password" ? "text" : "password")
            }}
      className='absolute top-1/2 right-2 -translate-y-1/2'
      type='button'
      >
      <Icon 


      icon={`${pwitype === "password"? "mdi:eye-off-outline" : "mdi:eye-outline"}`}
      
      className="text-slate-500 " 

      fontSize={25}

      />  

      </button>
      </div>
      <a href="#hh" className=" text-xs text-red-500 text-end">
        Mot de passe oublie ?
      </a>
    </div>
    <div className="flex justify-center mt-5">
      <Button type="sumbit" title={"Se connecter"} />
    </div>
    <div className="flex justify-center mt-5">
      <p>pas de compte ?<Link href="/auth/register" className="ms-2 text-green-500 text-end">
        creer un compte
        </Link> </p>

    </div>
  </form>
  )
}
