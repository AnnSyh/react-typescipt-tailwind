import React, { useState, useContext } from "react"
import { IProduct } from "../models"

import { OpenedImg } from '../companents/OpenedImg';
import { Modal } from './../companents/Modal';
import { ModalContext } from './../context/ModalContext';



interface ProductProps {
  product: IProduct
  passItem: (product: IProduct) => void
}

export function Product({ product, passItem }: ProductProps) {
  // console.log('Product: props = ', product);
  // console.log('Product: props.passItem = ', passItem);

  const { modal: imgProductModal, open: imgProductOpen, close: imgProductClose } = useContext(ModalContext);

  const [card, setCard] = useState(true);
  const [details, setDetails] = useState(false);

  const cardClass = card ? 'block' : 'hidden'
  const cardClases = ['border p-5 m-5 relative', cardClass]

  const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClasses = ['py-2 px-4 border', btnBgClassName]

  function hideCard() {
    setCard(prev => !prev)
  }

  return (

    <>


      <div className={cardClases.join(' ')}>
        <button
          className='absolute top-0 right-0 rounded-full text-2xl px-4 py-2 text-gray-400 hover:text-black'
          onClick={hideCard}
        >x</button>
        <img
          onClick={() => passItem(product)}
          className="w-1/6 m-auto"
          src={product.image}
          alt={product.title} />
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
          <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
        </div>}
      </div>
    </>
  )
}