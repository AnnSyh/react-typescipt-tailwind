import React, { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details? 'bg-yellow-400' : 'bg-blue-400'

  const btnClasses =['py-2 px-4 border', btnBgClassName]

  return (
    <div className="border p-5 m-5">

      <img className="w-1/6 m-auto" src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        onClick={() => setDetails(prev => !prev)}
        className={btnClasses.join(' ')}
      >
        {details ? 'Hide Details' : 'Show Details'}
      </button>
      {details && <div>
        <p>{product.description}</p>
        {/* <p>Rate: <span style={{fontWeight:'bold'}}>{product.rating.rate}</span></p> */}
        {/* <p>Rate: <span style={{fontWeight:'bold'}}>{product?.rating?.rate}</span></p> // You may need an appropriate loader to handle this file type. */}
      </div>}
    </div>
  )
}