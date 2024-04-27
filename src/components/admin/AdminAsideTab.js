import { AuthContext } from "@/context/authContext";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

export const AdminAsideTab = () => {
    const {user} = useContext(AuthContext)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const router = useRouter()
    if (!user?.is_superuser) return null



  return (
    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
         
         <li>
            <div className='flex justify-between items-center'>
            <Link href="/admin" className={`flex grow items-center p-2 text-gray-900 rounded-lg dark:text-white  group ${ router.pathname == "/admin" ? "bg-blue-500  *:text-white " : "hover:bg-gray-700" }`}>
            <Icon icon="tdesign:api" />
               <span className="ms-3">Admin</span>
            </Link>
            <button className='ms-3'
            onClick={() => setIsCollapsed(!isCollapsed)}
            >
            <Icon icon={`bxs:${isCollapsed ? "down-arrow" : "up-arrow"}`} />
            </button>
            </div>
         </li>
         {
            !isCollapsed && (
                <ul className="mt-1 pr-2 font-medium border-gray-200 dark:border-gray-700">

<li>
             <Link href="/" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group ${ router.pathname == "/admin/loans"? "bg-green-500  *:text-white " : "hover:bg-gray-700" }`}>
             <Icon icon="fluent:library-20-regular" fontSize={30} className='text-gray-400' />
                <span className="flex-1 ms-3 whitespace-nowrap">Loans</span>
             </Link>
          </li>
                </ul>
            )
         }
      </ul>
  );
};
