import React, { useState } from "react"
import { IProduct } from "../models"


interface ProductProps {
  product: IProduct
  onClick?: () => void
  clickImg?: () => void
}

export function Product(props:ProductProps) {

console.log('props = ', props);

  const [card, setCard] = useState(true);
  const [details, setDetails] = useState(false);
  
  const cardClass = card ? 'block' : 'hidden'
  const cardClases = ['border p-5 m-5 relative', cardClass]
  
  const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClasses = ['py-2 px-4 border', btnBgClassName]

  function onClick() {
    setCard(prev => !prev)
  }


  return (
      <div className={cardClases.join(' ')}>

        <button
          className='absolute top-0 right-0 rounded-full text-2xl px-4 py-2 text-gray-400 hover:text-black'
          onClick={onClick}
        >x</button>

        <img onClick={props.clickImg} className="w-1/6 m-auto" src={props.product.image} alt={props.product.title} />
        <p>{props.product.title}</p>
        <p className="font-bold">{props.product.price}</p>
        <button
          onClick={() => setDetails(prev => !prev)}
          className={btnClasses.join(' ')}
        >
          {details ? 'Hide Details' : 'Show Details'}
        </button>
        {details && <div>
          <p>{props.product.description}</p>
          <p>Rate: <span style={{ fontWeight: 'bold' }}>{props.product?.rating?.rate}</span></p>
        </div>}
      </div>
  )
}