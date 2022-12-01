import React from "react";
import { useProducts } from './../hooks/products';


export function OpenProductImg() {
  const { products, error, loading, addProduct } = useProducts();

  console.log('products = ', products);


  return (
    <>
      <img
        className="w-full"
        src={products[3].image}
        alt={products[3].title}
      />
    </>
  )
}