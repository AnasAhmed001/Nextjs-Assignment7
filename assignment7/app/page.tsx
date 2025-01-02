"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const parsedResponse = await response.json();
      console.log("products >>>", parsedResponse);
      setData(parsedResponse);
    };
    fetchData();
  }, []);

  return (
    <>
    <div>
      <Link href={} >Server Side</Link>
    </div>
      <div className="grid grid-cols-3 ">
        {data.length === 0 ? (
          <p>Loading...</p>
        ) : (
          data.map((products) => (
            <div
              key={products.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8"
            >
              <a href="#">
               <Image src={products.image} layout="responsive"width={16} height={9} alt={products.title}></Image>
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                    {products.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-white dark:text-gray-400">
                  {products.description}
                </p>
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Page;
