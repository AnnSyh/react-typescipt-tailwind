import React, { useState } from "react";
import { IProduct } from "../models";
import { FaTimes } from "react-icons/fa";
// import { FaTimes } from '../../node_modules/react-icons/fa'

interface ProductProps {
  product: IProduct;
  passItem: (product: IProduct) => void;
  modalShowDeleteProduct: (product: IProduct) => void;
  // removeHandler: (product: IProduct) => void
  // removeHandler: (product: IProduct, index: number) => void
  // onClick: (product: IProduct) => void
}

export function Product({
  product,
  passItem,
  modalShowDeleteProduct,
}: ProductProps) {
  const [card, setCard] = useState(true);
  const [details, setDetails] = useState(false);

  const cardClass = card ? "block" : "hidden";
  const cardClases = ["border p-5 m-5 relative", cardClass];

  const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400";
  const btnClasses = ["py-2 px-4 border", btnBgClassName];

  // const hideCard = () => {
  //   console.log("del card");
  //   setCard((prev) => !prev);
  // };

  return (
    <>
      <div className={cardClases.join(" ")}>
        <FaTimes
          className="hover:cursor-pointer absolute top-3 right-3"
          // onClick={hideCard}
          onClick={() => modalShowDeleteProduct(product)}
          // hideCard={hideCard}
        />
        <img
          onClick={() => passItem(product)}
          className="w-1/6 m-auto cursor-pointer"
          src={product.image}
          alt={product.title}
        />
        <p>{product.title}</p>
        <p className="font-bold">{product.price}</p>
        <button
          onClick={() => setDetails((prev) => !prev)}
          className={btnClasses.join(" ")}
        >
          {details ? "Hide Details" : "Show Details"}
        </button>
        {details && (
          <div>
            <p>{product.description}</p>
            <p>
              Rate:{" "}
              <span style={{ fontWeight: "bold" }}>
                {product?.rating?.rate}
              </span>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
