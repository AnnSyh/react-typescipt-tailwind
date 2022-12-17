import React from "react";

export const OpenedImg = (props: any) => {
  console.log('OpenedImg: props = ', props.product);

  return (
    <div>
      <h1>title = {props.product.title}</h1>
      <img className="full-w full-h" src={props.product.image} alt="Img product" />
    </div>
  )
}