import React, { useContext, useState } from 'react';
import { CreateProduct } from '../companents/CreateProduct';
import { ErrorMessage } from '../companents/ErrorMessage';
import { Loder } from '../companents/Loader';
import { Modal } from '../companents/Modal';
import { Product } from '../companents/Product';
import { OpenedImg } from '../companents/OpenedImg';
import { ConfirmDeleteProduct } from '../companents/ConfirmDeleteProduct'

import { useProducts } from '../hooks/products';
import '../index.css';
import { IProduct } from '../models';

import { useAlert } from "../alert/AlertContext";

export function ProductsPage() {
  const { products, error, loading, addProduct } = useProducts();

  const [modal, setModal] = useState({
    modalCreateProduct: false,
    modalShowProductImg: false,
    confirmDeleteProduct: false
  })

  const { show } = useAlert();
  const [alert, setAlert] = useState(true);

  const createHandler = (product: IProduct) => {
    setModal({ ...modal, modalCreateProduct: false })
    addProduct(product);
  }

  //запоминаем кликнутую картинку карточки продукта и устанавливаем ее дефолтное значение
  const [selectedProduct, setSelectedProduct] = useState({
    id: 0,
    title: 'дефолтный заголовок',
    price: 333,
    description: 'string',
    category: 'string',
    image: 'https://www.thesprucepets.com/thmb/QDw4vt7XXQejL2IRztKeRLow6hA=/2776x1561/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg',
  });

  //запоминаем выбранную для удаления карточку продукта и устанавливаем ее дефолтное значение
  const [selectedProductClickedCross, setSelectedProductClickedCross] = useState({
    id: 0,
    title: '...',
    price: 333,
    description: '...',
    category: '...',
    image: '...',
  });

  const passItem = (product: IProduct) => {
    setModal({ ...modal, modalShowProductImg: true })
    setSelectedProduct(product)
  }

  const modalShowDeleteProduct = (product: IProduct) => {
    setModal({ ...modal, confirmDeleteProduct: true })
    setSelectedProductClickedCross(product)
  }

  const removeHandler = (product: IProduct) => {
    console.log('removeHandler product = ', product);
    console.log('selectedProductClickedCross = ', selectedProductClickedCross);

    // products.map((item) => {
    //   //надо вырезать эл-ты совпадающие с входящим
    // })

    // setProducts(prev => prev.filter(product => product.id !== id))
    // close()

  }

  const [newProducts, setNewProducts] = useState(products)


  return (
    <>
      <div>
        <button
          onClick={() => {
            show("Этот текст из Main.js")
            setAlert(prev => !prev)
          }}
          className={alert ? 'btn-default' : 'btn-default-active'}
        >
          {alert ? 'Show Alert' : 'Hide Alert'}
        </button>
      </div>
      <div className='container m-auto text-center grid grid-cols-2 grid-flow-row gap-2'>
        {loading && <Loder />}
        {error && <ErrorMessage error={error} />}

        {/* {model.map(product => */}
        {products.map(
          (product, index) =>
            <Product
              key={product.id}
              product={product}
              passItem={passItem}
              modalShowDeleteProduct={modalShowDeleteProduct}
            // onClick={() => {
            //   const newProducts = [...products]
            //   newProducts.splice(index, 1)
            //   setNewProducts(newProducts)
            // }}
            />
        )
        }

        {modal.modalCreateProduct && <Modal
          title='Create new product'
          onClose={() => setModal({ ...modal, modalCreateProduct: false })}
        >
          <CreateProduct onCreate={createHandler} />
        </Modal>}

        {modal.modalShowProductImg && <Modal
          title='Img product'
          onClose={() => setModal({ ...modal, modalShowProductImg: false })}
        >
          <OpenedImg product={selectedProduct} />
        </Modal>}

        {modal.confirmDeleteProduct && <Modal
          title='Хотите удалить?'
          onClose={() => setModal({ ...modal, confirmDeleteProduct: false })}
        >
          <ConfirmDeleteProduct
            product={selectedProductClickedCross}
            removeHandler={removeHandler}
          />
        </Modal>}

        <button
          className='border fixed bottom-0 right-0 rounded-full bg-red-500 text-2xl px-4 py-2 hover:text-white'
          onClick={() => setModal({ ...modal, modalCreateProduct: true })}
        >+</button>

      </div>
    </>
  );
}