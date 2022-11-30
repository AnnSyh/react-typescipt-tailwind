import React, { createContext, useState } from "react";

interface IProductContext {
  product: boolean
  closeProduct: () => void
}

export const ProductContext = createContext<IProductContext>({
  product: true,
  closeProduct: () => { console.log('closeProduct!!!'); }
})

export const CardState = ({ children }: { children: React.ReactNode }) => {
  const [product, setProduct] = useState(true)

  const closeProduct = () => setProduct(true)

  return (
    <ProductContext.Provider value={{ product, closeProduct }}>
      {children}
    </ProductContext.Provider>
  )
}