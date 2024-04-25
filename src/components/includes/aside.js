import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const Aside = ({isAsideCollapsed, setIsAsideCollapsed}) => {

   const router = useRouter()

  return (
    <aside id="cta-button-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform md:translate-x-0 bg-gray-50 dark:bg-gray-800   ${isAsideCollapsed ? "-translate-x-full" : "translate-x-0"}`} aria-label="Sidebar">
<div className='flex justify-between p-4 items-center'>

      <Link href="/" className='flex items-center'>
         <h3 className='text-3xl tracking-wider'>Bi<span className='font-bold text-green-500'>Bli</span></h3>
         <Icon icon="iconamoon:discover-fill" fontSize={25} className='text-green-500' />
      </Link>
      <Icon icon="mingcute:close-fill" fontSize={30} className='text-gray-400 cursor-pointer font-bold md:hidden' onClick={() => setIsAsideCollapsed(true)} />
</div>

    <div className="h-full px-3 py-4 overflow-y-auto ">
       <ul className="space-y-2 font-medium">
          <li>
             <Link href="/" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group ${ router.pathname == "/" || router.pathname == "/search" ? "bg-green-500  *:text-white " : "hover:bg-gray-700" }`}>
             <Icon icon="iconamoon:discover-fill" fontSize={30} className='text-gray-400' />
                <span className="flex-1 ms-3 whitespace-nowrap">Discover</span>
             </Link>
          </li>
          <li>
             <Link href="category" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group ${ router.pathname == "/category" ? "bg-green-500  *:text-white " : "hover:bg-gray-700" }`}>
             <Icon icon="mdi:category" fontSize={30} className='text-gray-400 dark:group-hover:text-white' />
                <span className="flex-1 ms-3 whitespace-nowrap">Category</span>
             </Link>
          </li>
          <li>
             <Link href="library" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group ${ router.pathname == "/library" ? "bg-green-500  *:text-white " : "hover:bg-gray-700" }`}>
             <Icon icon="clarity:library-solid"  fontSize={30} className='text-gray-400 dark:group-hover:text-white' />
                <span className="flex-1 ms-3 whitespace-nowrap">Library</span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
             </Link>
          </li>
          <li>
          </li>
          <li>
             <a  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white opacity-60 group ${ router.pathname == "/recommendation" ? "bg-green-500  *:text-white " :"" }`} >
             <Icon icon="carbon:recommend" fontSize={30} className='text-gray-400 ' />
             <div>
                <span className="flex-1 ms-3 whitespace-nowrap">Recommendation</span>
                <p className='flex-1 ms-3 whitespace-nowrap text-xs font-thin text-green-300'>coming soon</p>
             </div>
             </a>
          </li>
          <li>
             <Link href="/favorite" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group ${ router.pathname == "/favorite" ? "bg-green-500  *:text-white " : "hover:bg-gray-700" }`}>
             <Icon icon="material-symbols-light:favorite"  fontSize={30} className='text-gray-400 dark:group-hover:text-white'/>
                <span className="flex-1 ms-3 whitespace-nowrap">Favorite</span>
             </Link>
          </li>
          {/* <li>
             <a href="#" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group ${ router.pathname == "/" ? "bg-green-500  *:text-white " : "hover:bg-gray-700" }`}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
             </a>
          </li>
          <li>
             <a href="#" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group ${ router.pathname == "/" ? "bg-green-500  *:text-white " : "hover:bg-gray-700" }`}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                   <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                   <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
             </a>
          </li> */}
       </ul>
       {/* <div id="dropdown-cta" className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
          <div className="flex items-center mb-3">
             <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
             <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
             </button>
          </div>
          <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
             Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
          </p>
          <a className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
       </div> */}
       <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
         
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <Icon icon="tdesign:api" />
               <span className="ms-3">API</span>
            </a>
         </li>
      </ul>
    </div>
 </aside>
  )
}
