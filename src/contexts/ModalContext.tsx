import { ReactNode, createContext, useContext, useState } from 'react'

interface ModalContextProps {
  modalIsOpen: boolean
  toggleModal: () => void
}

interface ModalProviderProps {
  children: ReactNode
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleModal = () => {
    setModalIsOpen((prev) => !prev)
  }

  return (
    <ModalContext.Provider value={{ modalIsOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = (): ModalContextProps => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}
