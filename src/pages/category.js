import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <Layout className="">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-yellow-500 rounded-md *:text-black cursor-pointer">
          <div className="p-4">
            <div className="flex justify-between">
              <img
                className="w-54 h-28 shadow-2xl rounded-md"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519632815i/37706596.jpg"
              />
            </div>
            <div className="flex flex-col justify-between  mt-4">
              <h3 className="font-bold tracking-widest">Livres pour Enfant</h3>
              <Link href={"/"} className="flex items-center gap-2">
                Explore now
                <Icon icon="ep:arrow-right-bold" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-lime-500 rounded-md *:text-black cursor-pointer">
          <div className="p-4">
            <div className="flex justify-between">
              <img
                className="w-54 h-28 shadow-2xl rounded-md"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519632815i/37706596.jpg"
              />
            </div>
            <div className="flex flex-col justify-between  mt-4">
              <h3 className="font-bold tracking-widest">Livres pour Enfant</h3>
              <Link href={"/"} className="flex items-center gap-2">
                Explore now
                <Icon icon="ep:arrow-right-bold" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-green-500 rounded-md *:text-black cursor-pointer">
          <div className="p-4">
            <div className="flex justify-between">
              <img
                className="w-54 h-28 shadow-2xl rounded-md"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519632815i/37706596.jpg"
              />

            </div>
            <div className="flex flex-col justify-between  mt-4">
              <h3 className="font-bold tracking-widest">Livres pour Enfant</h3>
              <Link href={"/"} className="flex items-center gap-2">
                Explore now
                <Icon icon="ep:arrow-right-bold" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-orange-500 rounded-md *:text-black cursor-pointer">
          <div className="p-4">
            <div className="flex justify-between">
              <img
                className="w-54 h-28 shadow-2xl rounded-md"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519632815i/37706596.jpg"
              />

            </div>
            <div className="flex flex-col justify-between  mt-4">
              <h3 className="font-bold tracking-widest">Livres pour Enfant</h3>
              <Link href={"/"} className="flex items-center gap-2">
                Explore now
                <Icon icon="ep:arrow-right-bold" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-rose-500 rounded-md *:text-black cursor-pointer">
          <div className="p-4">
            <div className="flex justify-between">
              <img
                className="w-54 h-28 shadow-2xl rounded-md"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519632815i/37706596.jpg"
              />

            </div>
            <div className="flex flex-col justify-between  mt-4">
              <h3 className="font-bold tracking-widest">Livres pour Enfant</h3>
              <Link href={"/"} className="flex items-center gap-2">
                Explore now
                <Icon icon="ep:arrow-right-bold" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-orange-500 rounded-md *:text-black cursor-pointer">
          <div className="p-4">
            <div className="flex justify-between">
              <img
                className="w-54 h-28 shadow-2xl rounded-md"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519632815i/37706596.jpg"
              />
            </div>
            <div className="flex flex-col justify-between  mt-4">
              <h3 className="font-bold tracking-widest">Livres pour Enfant</h3>
              <Link href={"/"} className="flex items-center gap-2">
                Explore now
                <Icon icon="ep:arrow-right-bold" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-pink-500 rounded-md *:text-black cursor-pointer">
          <div className="p-4">
            <div className="flex justify-between w-full">
              <img
                className="flex-1 h-28 shadow-2xl rounded-md"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519632815i/37706596.jpg"
              />
              
            </div>
            <div className="flex flex-col justify-between  mt-4">
              <h3 className="font-bold tracking-widest">Livres pour Enfant</h3>
              <Link href={"/"} className="flex items-center gap-2">
                Explore now
                <Icon icon="ep:arrow-right-bold" />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-red-500 rounded-md *:text-black cursor-pointer">
          <div className="p-4">
            <div className="flex justify-between">
              <img
                className="w-54 h-28 shadow-2xl rounded-md"
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519632815i/37706596.jpg"
              />
             
            </div>
            <div className="flex flex-col justify-between  mt-4">
              <h3 className="font-bold tracking-widest">Livres pour Enfant</h3>
              <Link href={"/"} className="flex items-center gap-2">
                Explore now
                <Icon icon="ep:arrow-right-bold" />
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex justify-center items-center h-[80vh]  w-full">
        <h3 className="text-3xl font-sans font-bold">Bientot disponible</h3>
      </div>
    </Layout>
  );
};

export default Category;
