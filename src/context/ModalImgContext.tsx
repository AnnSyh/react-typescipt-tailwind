import React, { createContext, useState } from "react";

interface IModalImgContext {
  modal: boolean
  modalId: number
  open: () => void
  close: () => void

}

export const ModalImgContext = createContext<IModalImgContext>({
  modal: false,
  modalId: 0,
  open: () => { },
  close: () => { }
})

export const ModalState = ({ children }: { children: React.ReactNode }, modalId: number) => {
console.log('modalId = ', modalId);
  const [modal, setModal] = useState(false)

  const open = () => setModal(true)

  const close = () => setModal(false)

  return (
    <ModalImgContext.Provider value={{ modal, modalId, open, close }}>
      {children}
    </ModalImgContext.Provider>
  )
}