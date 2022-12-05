import React, { useState } from "react";
import axios from 'axios';
import { IProduct } from "../models";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10
  }
}

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate }: CreateProductProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const SubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();    // отменяем стандартное поведение формы
    setError('');             //чистим ошибку

    // базавая валидация
    if (value.trim().length === 0) { //если после обрезания пробелов value  пустое
      setError('Please enter valid title');
      return
    }

    productData.title = value;
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);

    onCreate(response.data);
    // onCreate(productData);
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }


  return (
    <form onSubmit={SubmitHandler}>
      <input
        id='title'
        type="text"
        className='border py-2 px-4 mb-2 w-full outline-0'
        placeholder="Enter product title....."
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button
        type='submit'
        className="border py-2 px-4 mb-2 bg-yellow-400 hover:text-white"
      >Create
      </button>
    </form>
  )
}