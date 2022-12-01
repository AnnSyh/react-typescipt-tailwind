import React, { useContext, useState } from 'react';
import { CreateProduct } from './../companents/CreateProduct';
import { ErrorMessage } from './../companents/ErrorMessage';
import { Loder } from './../companents/Loader';
import { Modal } from './../companents/Modal';
import { Product } from './../companents/Product';
import { ModalContext } from './../context/ModalContext';

import { OpenProductImg } from './../companents/OpenProductImg';
// import { ProductContext } from './../context/ProductContext';
import { useProducts } from './../hooks/products';
import './../index.css';
import { IProduct } from './../models';

export function ProductsPage() {
  const { products, error, loading, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  }

  return (
    <div className='container m-auto text-center grid grid-cols-2 grid-flow-row gap-2'>
      {loading && <Loder />}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product
                                  key={product.id}
                                  product={product}
                                />
                    )
      }

      {/* {modal && <Modal title='OpenProductImg' onClose={() => close()}>
        <OpenProductImg data-productId='3' />
      </Modal>} */}

      {modal && <Modal title='Create new product' onClose={() => close()}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button
        className='border fixed bottom-0 right-0 rounded-full bg-red-500 text-2xl px-4 py-2 hover:text-white'
        onClick={() => open()}
      >+</button>

    </div>
  );
}