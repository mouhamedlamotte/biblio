import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";
import Image from "next/image";
import Link from "next/link";
import { NotificationsTab } from "./NotificationsTab";

export const Navbar = ({ user, setIsAsideCollapsed }) => {
  const router = useRouter();
  const [q, setQ] = useState("");
  const cookies = new Cookies();
  const pathname = usePathname();

  const [userTab, setUserTab] = useState(false);

  const [showNotifications, setShowNotifications] = useState(false);

  const handle_search = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { q },
    });
  };

  const logout_user = () => {
    cookies.remove("access_token", { path: "/" });
    router.refresh();
    toast.warning("Vous etes deconnecte");
  };

  return (
    <nav className="bg-gray-50 dark:bg-gray-800 py-5 px-2 lg:px-0 flex justify-between">
      <div className={`flex  items-center px-4 w-full ${
            pathname == "/search" ? "justify-between md:justify-end" : "justify-between"
          }`}>
        <button
          data-drawer-target="cta-button-sidebar"
          data-drawer-toggle="cta-button-sidebar"
          aria-controls="cta-button-sidebar"
          type="button"
          className="md:hidden"
          onClick={() => setIsAsideCollapsed(false)}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <div
          className={` flex w-full ${
            pathname == "/search" ? "justify-end" : "justify-end md:justify-between"
          }`}
        >

        <form
          onSubmit={handle_search}
          className={`bg-slate-200 dark:bg-slate-950 rounded-md  items-center px-2   ${
            pathname == "/search" ? "hidden" : "hidden md:flex"
          }`}
        >
          <Icon
            icon="ic:round-search"
            fontSize={25}
            className="text-gray-500"
          />
          <input
            autoComplete="off"
            placeholder="Rechercher un livre "
            className={`p-2 outline-none  bg-transparent rounded-md`}
            name="q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          {/* <input className="hidden" name="category" value="all" /> */}
        </form>
        <div className="flex items-center ">
          <Link href={"/search"} className="flex md:hidden">
            <Icon
              className=" text-gray-500 h-8 w-8"
              icon="mdi:search"
              fontSize={25}
            />
          </Link>
          {user ? (
            <div className="flex items-center gap-4">
              
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className=""
                  >
                <Icon
                  className="text-gray-500"
                  icon="mdi:bell"
                  fontSize={35}
                />

                </button>
                <NotificationsTab collasped={!showNotifications} />
              </div>
              <div className="relative">
                <button
                  className="rounded-xl z-10 flex items-center p-0  md:px-2  gap-4 bg-slate-950 hover:bg-green-400 *:hover:text-white md:p-2 cursor-pointer"
                  onClick={(e) => {
                    setUserTab(!userTab);
                  }}
                >
                  <div className="h-8 w-8 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      height={100}
                      width={100}
                      src={
                        user?.avatar_url
                          ? user?.avatar_url
                          : "/assets/images/users/default_avatar.jpg"
                      }
                      alt="avatar"
                    />
                  </div>
                  <h4 className="hidden lg:block text-gray-300">
                    {user?.username}
                  </h4>
                  <Icon
                    className="hidden lg:block text-slate-500"
                    icon="ep:arrow-down-bold"
                  />
                </button>
                <div
                  id="dropdownAvatarName"
                  className={`z-10 absolute  bg-white divide-y divide-gray-100 rounded-lg -ml-36 lg:-ml-0 shadow w-44 lg:w-full dark:bg-gray-700 dark:divide-gray-600 ${
                    userTab ? "block" : "hidden"
                  }`}
                >
                  <button className="px-4 py-3 text-sm text-gray-900 dark:text-white text-start"
                  onClick={() => router.push(`/profile`)}
                  >
                    <div className="font-medium ">{user?.username}</div>
                    <div className="truncate">{user?.email}</div>
                  </button>
                  {/* <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
              </ul> */}
                  <div className="py-2">
                    <button
                      onClick={logout_user}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Deconnexion
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link
              href={"/auth/login"}
              className="h-8 w-8 ml-4 border-gray-500 flex items-center border justify-center rounded-full"
            >
              <Icon icon="ph:user-fill" className="text-gray-500" />
            </Link>
          )}
        </div>
        </div>
      </div>
    </nav>
  );
};
