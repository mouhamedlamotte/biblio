import { Loader } from '@/components/includes/loader'
import { RegisterForm } from '@/components/sections/auth/RegisterForm'
import React, { useState } from 'react'

const Register = () => {

    const [isloading, setIsloading] = useState(false)

  return (
    <div className="w-full h-screen overflow-hidden flex ">
        <Loader isloading={isloading} />
      <div className="flex-1 bg-slate-500 h-full hidden md:block login-banner-left"></div>
      <div className="flex-1 h-full flex justify-center items-center p-4 md:p-0">
            <RegisterForm  setIsloading={setIsloading} />
      </div>
    </div>
  )
}

export default Register