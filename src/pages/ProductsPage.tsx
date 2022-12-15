import React, { useContext, useState } from 'react';
import { CreateProduct } from '../companents/CreateProduct';
import { ErrorMessage } from '../companents/ErrorMessage';
import { Loder } from '../companents/Loader';
import { Modal } from '../companents/Modal';
import { Product } from '../companents/Product';
import { OpenedImg } from '../companents/OpenedImg';
import { ModalContext } from '../context/ModalContext';

import { useProducts } from '../hooks/products';
import '../index.css';
import { IProduct } from '../models';

import { useAlert } from "../alert/AlertContext";

export function ProductsPage() {
  const { products, error, loading, addProduct } = useProducts();

  const { modal, open, close } = useContext(ModalContext);
  const { modal: imgProductModal, open: imgProductOpen, close: imgProductClose } = useContext(ModalContext);

  const { show } = useAlert();
  const [alert, setAlert] = useState(true);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  }
  //запоминаем выбранную карточку продукта и устанавливаем ее дефолтное значение
  const [selectedProduct, setSelectedProduct] = useState({
    id: 0,
    title: 'дефолтный заголовок',
    price: 333,
    description: 'string',
    category: 'string',
    image: 'https://www.thesprucepets.com/thmb/QDw4vt7XXQejL2IRztKeRLow6hA=/2776x1561/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg',
  });

  const passItem = (product: IProduct) => {
    console.log('passItem = ', passItem);
    open()
    setSelectedProduct(product)

  }

  console.log('ProductsPage  modal = ', modal);
  console.log('ProductsPage  imgProductModal = ', imgProductModal);

  return (
    <>
      <div>
        <button
          onClick={() => {
            show("Этот текст из Main.js")
            setAlert(prev => !prev)
          }}
          className={alert ? 'btn' : 'btn-active'}
        >
          {alert ? 'Show Alert' : 'Hide Alert'}
        </button>
      </div>
      <div className='container m-auto text-center grid grid-cols-2 grid-flow-row gap-2'>
        {loading && <Loder />}
        {error && <ErrorMessage error={error} />}

        {products.map(product =>
          <Product
            key={product.id}
            product={product}
            passItem={passItem}
          />
        )
        }

        {modal && <Modal
          title='Create new product'
          onClose={() => close()}
        >
          <CreateProduct onCreate={createHandler} />
        </Modal>}

        {imgProductModal && <Modal
          title='Img product'
          onClose={() => imgProductClose()}
        >
          <OpenedImg product={selectedProduct} />
        </Modal>}



        <button
          className='border fixed bottom-0 right-0 rounded-full bg-red-500 text-2xl px-4 py-2 hover:text-white'
          onClick={() => open()}
        >+</button>

      </div>
    </>
  );
}