import React, { useState } from "react";
import { products } from "../data/products";
import { IProduct } from "../models"

type ConfirmDeleteProductProps = {
  product: IProduct,
  removeHandler: (product: IProduct) => void
  // removeHandler: (product: IProduct, index: number) => void
}

export const ConfirmDeleteProduct = (props: ConfirmDeleteProductProps) => {
  console.log('ConfirmDeleteProduct: props.product = ', props.product);
  console.log('ConfirmDeleteProduct: props.removeHandler = ', props.removeHandler);


  return (
    <div>
      <button
        className="btn-default-active"
        onClick={() => props.removeHandler(props.product)}>
        Да
      </button>
    </div>
  )
}