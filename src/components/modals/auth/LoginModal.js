import React, { useState } from 'react'

export const LoginModal = () => {
    const [showModal, setShowModal] = useState(false)
  return (
        
        <div className={`h-screen  w-full justify-center items-center  fixed cursor-pointer ${ showModal ? "flex" : "hidden" }`}
            >
            {/* <LoginForm icon={true} setShowModal={setShowModal}  showModal={showModal} uid={"username-2"} pid={"password-2"} /> */}
        </div>
  )
}
