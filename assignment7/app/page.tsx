"use client"
import React, { useEffect, useState } from 'react'

const page = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      const parsedResponse = await response.json();
      console.log("todos >>>", parsedResponse);
      setData(parsedResponse);
    };
    fetchData();
  }, []);

  return (
    <div className='flex justify-center'>
      {data.map((products, index) => (
        <div key={index} className="bg-blue-400 border border-1">
          <p>Title: {products.title}</p>
          <p>Description: {products.description}</p>
          <p>Price: {products.price}</p>
        </div>
      ))};
    </div>
  );
}

export default page;