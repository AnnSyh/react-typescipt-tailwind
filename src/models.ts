export interface IProduct {
  id?: number,
  close?: boolean,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating?: {
    rate:number,
    count: number
  }
}