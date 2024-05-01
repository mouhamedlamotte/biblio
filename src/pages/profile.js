import { updateUser, uploadAvatar } from '@/api/users'
import { Layout } from '@/components/layout/layout'
import { AuthContext } from '@/context/authContext'
import { ProtectedRouteWrapper } from '@/security/ProtectedRoute'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'

const Profile = () => {


    const router = useRouter()
    const { user } = useContext(AuthContext)
    const [profileurl, setProfileurl] = useState(null)


    const [userinfo, setUserinfo] = useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
    })

    const hadlechageinfo = (e) => {
        const { name, value } = e.target
        setUserinfo({ ...userinfo, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        updateUser(user?.id, userinfo)
    }






    const handlechagepp = async (e) => {
        const file = e.target.files[0]
        const url = await uploadAvatar(user?.id, file)
        updateUser(user?.id, { avatar_url: url })
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setProfileurl(reader.result)
        }
    }

  return (
    <ProtectedRouteWrapper>
    <Layout>
    <section className="my-auto dark:bg-gray-900">
    <div className="mx-auto flex gap-4">
        <div
            className="w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div className="">
                <h1
                    className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                    Profile
                </h1>
                        <div
                            className="mx-auto relative flex items-center  justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-center bg-no-repeat">
                                <img className='w-full h-full  rounded-full' src={profileurl ? profileurl : user?.avatar_url}/>

                            <div className="bg-white/90 absolute top-0 left-0 rounded-full w-6 h-6 text-center ml-28 mt-4">

                                <input type="file" name="profile" id="upload_profile" hidden accept="image/*" onChange={handlechagepp} />

                                <label htmlFor="upload_profile">
                                        <svg data-slot="icon" className="w-6 h-5 text-blue-700" fill="none"
                                            strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                            </path>
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                            </path>
                                        </svg>
                                    </label>
                            </div>
                        </div>
                <form className="p-6 mt-4 bg-gray-50  dark:bg-gray-900 rounded-md w-full " onSubmit={handleSubmit} method='post'>
                    <div
                        className="w-full rounded-sm bg-cover bg-center bg-no-repeat items-center">
                            
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                        <div className="w-full  mb-4 mt-6">
                            <label htmlFor="" className="mb-2 dark:text-gray-300">Username</label>
                            <input type="text"
                                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Username"
                                    value={userinfo.username}
                                    name='username'
                                    onChange={hadlechageinfo}
                                    />
                        </div>
                        <div className="w-full  mb-4 lg:mt-6">
                            <label htmlFor="" className=" dark:text-gray-300">Email</label>
                            <input type="email"
                                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="email" 
                                    value={userinfo.email}
                                    name='email'
                                    onChange={hadlechageinfo}
                                    />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                        <div className="w-full  mb-4 mt-6">
                            <label htmlFor="" className="mb-2 dark:text-gray-300">First Name</label>
                            <input type="text"
                                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="First Name"
                                    value={userinfo.first_name}
                                    name='first_name'
                                    onChange={hadlechageinfo}
                                    />
                        </div>
                        <div className="w-full  mb-4 lg:mt-6">
                            <label htmlFor="" className=" dark:text-gray-300">Last Name</label>
                            <input type="text"
                                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Last Name"
                                    value={userinfo.last_name}
                                    name='last_name'
                                    onChange={hadlechageinfo}
                                    />
                        </div>
                    </div>
                    <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                        <button type="submit" className="w-full p-4">Enrigister</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</Layout>
    </ProtectedRouteWrapper>
  )
}

export default Profile