import React from "react";
import { FaTimes } from "react-icons/fa"

interface ModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void
}

export function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      <div
        className="fixed bg-black/[0.5] top-0 right-0 left-0 bottom-0"
        onClick={onClose}
      />
      <div
        className="w-[500px] p-5 rounded bg-white fixed  left-1/2 -translate-x-1/2 "
      >
        <FaTimes
          className="hover:cursor-pointer absolute top-3 right-3"
          onClick={onClose}
        />
        <h1 className='text-2xl text-center md-2'>{title}</h1>
        {children}
      </div>
    </>
  )
}