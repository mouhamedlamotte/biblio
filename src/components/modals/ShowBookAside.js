import { Truncate } from "@/utils/truncate";
import { Icon } from "@iconify/react";
import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { makeLoan } from "@/api/loans";
import { toast } from "react-toastify";

export const ShowBookAside = ({ book, setBook }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const loanBook = async () => {
    setLoading(true);
    const loan = {
      book_id: book?.id,
      user_id: user?.id,
      created_by_id: user?.id,
      loan_status: "Pending",
      loan_duration: 14,
      fine_amount: null,
      fine_paid: false,
      loan_notes: null,
      loan_type: "Regular",
    };

    const res = await makeLoan(loan, user?.id);
    if (res) {
      console.log(res);
      if (res.success == -1) {
        toast.error(res.message);
        setLoading(false);
        return;
      }
      toast.success(
        "Emprunt effectue avec succes, vous recevrez une notification de confirmation"
      );
    }
    setLoading(false);
  };
  return (
    <>
      {book && (
        <div className="fixed top-0 right-0 z-40 w-72 h-screen  bg-gray-50 dark:bg-slate-950 rounded ">
          <div className="absolute flex  top-4  -left-4">
            <button
              className=" p-2 rounded-lg bg-green-500 hover:opacity-85 hover:mr-2"
              onClick={(e) => {
                setBook(null);
              }}
            >
              <Icon icon="ep:arrow-right-bold" fontSize={15} />
            </button>
          </div>
          <div className="p-10 flex justify-center items-center flex-col  overflow-y-auto overflow-x-hidden h-full scrollbar-none">
            <div className="h-60 w-full bg-white p-2 rounded-md ">
              <Image
                className="w-full h-full shadow-2xl"
                width={200}
                height={200}
                src={
                  book?.banner != null
                    ? book?.banner
                    : "/assets/images/default_book_cover.png"
                }
                alt="book image"
              />
            </div>
            <div className="p-2 mt-3">
              <h4 className="font-semibold text-md text-center truncate">
                <Truncate str={book.name} max={30} len={30} />
              </h4>
              <p className="text-sm mt-1 font-medium text-gray-300 text-center truncate">
                {book.author}
              </p>
            </div>
            <div className="flex mt-1 items-center gap-1">
              <Icon icon="ph:star-fill" className="text-yellow-200" />
              <Icon icon="ph:star-fill" className="text-yellow-200" />
              <Icon icon="ph:star-fill" className="text-yellow-200" />
              <Icon icon="ph:star-fill" />
              <Icon icon="ph:star-fill" />
              <span className="font-bold">(3.2)</span>
            </div>

            <div className="flex mt-10">
              <div className="text-center px-4">
                <h3 className="text-lg">{book.page_number}</h3>
                <p className="text-xs">pages</p>
              </div>
              <div className="text-center border-x-2 px-4 border-gray-500">
                <h3 className="text-lg">320</h3>
                <p className="text-xs">pages</p>
              </div>
              <div className="text-center px-4">
                <h3 className="text-lg">320</h3>
                <p className="text-xs">pages</p>
              </div>
            </div>
            <p className="text-xs text-center font-bold mt-10 text-gray-200">
              <Truncate str={book.resume} max={300} len={300} />
            </p>

            {user && !loading && (
              <Button
                title={"Loan Now"}
                className={"mt-10"}
                onclick={loanBook}
              />
            )}

            {!user && !loading && (
              <Button
                onclick={() => {
                  router.push("/auth/login");
                }}
                title="Se connecter"
                icon={<Icon icon="mdi:login" />}
                className={"flex justify-center mt-10 items-center gap-2"}
              />
            )}

            {loading && (
              <div className="h-8 w-8 mt-10 animate-spin border-4 border-slate-50 border-b-green-200 bg-transparent rounded-full"></div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
