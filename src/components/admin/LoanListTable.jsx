import { getLoans, manageLoans } from "@/api/loans";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LoanTrSkeleton } from "../skeletons/admin/LoanTrSkeleton";

export const LoanListTable = () => {
  const [loans, setLoans] = useState([]);
   const skeletons_ids = [1,2,3,4,5]

  const [isloading, setIsloading] = useState(false);

  const g_loans = async () => {
    setIsloading(true);
    const data = await getLoans();
    if (data) {
      setLoans(data);
    }
    setIsloading(false);
  };

  useEffect(() => {
    g_loans();
  }, []);

  const haddleAction = (loan_id, action) => {
    const res = manageLoans(loan_id, action)
    if (res) {
        if (res.success == -1) {
            toast.error(res.message);
            return;
        }
        toast.success(
          `Emprunt ${action}ed avec succes`
        );
        if (action == "delete") {
            const new_loans = loans.filter((loan) => loan.id != loan_id)
            setLoans(new_loans)
        }
        const update_dict = {
            "confirm": "Confirmed",
            "return": "Returned",
        }
        if (action in update_dict){
            const new_loans = loans.map((loan) => {
                if (loan.id == loan_id) {
                    loan.loan_status = update_dict[action]
                }
                return loan
            })
            setLoans(new_loans)
        }
    }
}

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row p-2 space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-950">
        <div>
          <button
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <span className="sr-only">Action button</span>
            Action
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdownAction"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownActionButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Reward
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Promote
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Activate account
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete User
              </a>
            </div>
          </div>
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Book
            </th>
            <th scope="col" className="px-6 py-3">
              User
            </th>
            <th scope="col" className="px-6 py-3">
              Status d&apos;emprunt
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {loans.length > 0 && !isloading && loans.map((loan) => <LaonTr key={loan?.id} loan={loan} OnAction={haddleAction} />)}
          {isloading && (
              skeletons_ids?.map((i) => <LoanTrSkeleton key={i} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

const LaonTr = ({ loan, OnAction }) => {
  return (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      key={loan?.id}
    >
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <td className="px-6 py-4">
      <div
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <Image
          width={40}
          height={40}
          className="w-10 h-10 rounded-sm"
          src={loan?.book_copy?.book?.banner}
          alt="Jese image"
        />
        <div className="ps-3">
          <div className="text-base font-semibold">{loan?.book_copy?.book?.name}</div>
          <div className="font-normal text-gray-500">
          {loan?.book_copy?.book?.author}
          </div>
        </div>
      </div>
      </td>
      <td className="px-6 py-4">
      <div
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <Image
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
          src={
            loan?.user?.avatar_url
              ? loan?.user?.avatar_url
              : "/assets/images/users/default_avatar.jpg"
          }
          alt="Jese image"
        />
        <div className="ps-3">
          <div className="text-base font-semibold">{loan?.user.username}</div>
          <div className="font-normal text-gray-500">
            {loan?.user.email}
          </div>
        </div>
      </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className={`h-2.5 w-2.5 rounded-full me-2 ${loan?.loan_status === "Pending" ? "bg-blue-500" : "bg-green-500"}`}></div>{" "}
          {loan?.loan_status}
        </div>
      </td>
      <td className="px-6 py-4 ">
          <div className="flex items-center gap-6">
          
          {
            loan?.loan_status === "Pending" &&           <button title="Marquer comme confirme"
            onClick={() => OnAction(loan?.id, "confirm")}
            >
            <Icon
              icon="line-md:confirm-circle"
              className="text-blue-500"
              fontSize={35}
            />
          </button>
          }
                    {
            loan?.loan_status === "Confirmed" &&           <button title="Marquer comme rendu"
            onClick={() => OnAction(loan?.id,"return")}
            >
            <Icon
              icon="ep:finished"
              className="text-green-500"
              fontSize={35}
            />
          </button>
          }
        {
            loan?.loan_status === "Returned" &&           <button title="Marquer comme rendu" disabled>
            <Icon
              icon="eva:done-all-outline"
              className="text-gray-500 opacity-50"
              fontSize={35}
              
            />
          </button>
          }
          <button title="Supprimer"
            onClick={() => OnAction(loan?.id,"delete")}
          
          >
            <Icon
              icon="mdi:trash-can-outline"
              className="text-red-500"
              fontSize={35}
            />
          </button>
          </div>
      </td>
    </tr>
  );
};

