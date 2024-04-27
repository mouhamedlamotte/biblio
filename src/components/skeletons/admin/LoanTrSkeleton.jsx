import React from "react";

export const LoanTrSkeleton = () => {

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <div className="w-4 h-4 text-blue-600 animate-pulse bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 p-2 "></div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div
            style={{ width: 40, height: 40 }}
            className="animate-pulse bg-gray-100 border-gray-300 rounded-sm"
          ></div>
          <div className="ps-3 flex flex-col gap-3">
            <div className="bg-gray-500 w-52 h-3 animate-pulse rounded-sm"></div>
            <div className="bg-gray-500 w-40 h-2 rounded-sm animate-pulse"></div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div
            style={{ width: 40, height: 40 }}
            className="animate-pulse bg-gray-100 border-gray-300 rounded-full"
          ></div>
          <div className="ps-3 flex flex-col gap-3">
            <div className="bg-gray-500 w-52 h-3 animate-pulse rounded-sm"></div>
            <div className="bg-gray-500 w-40 h-2 rounded-sm animate-pulse"></div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full me-2 bg-gray-300 animate-pulse"></div>{" "}
          <div className="bg-gray-500 w-20 h-2 rounded-sm animate-pulse"></div>
        </div>
      </td>
      <td className="px-6 py-4 ">
        <div className="flex items-center gap-6">
          <div className="w-8 h-8 animate-pulse bg-gray-300 rounded-full"></div>{" "}
          <div className="w-6 h-8 animate-pulse bg-gray-300 rounded-sm"></div>
        </div>
      </td>
    </tr>
  );
};
