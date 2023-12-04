import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ModalProvider } from './contexts/ModalContext.tsx'
import { TransactionsProvider } from './contexts/TransactionsContext.tsx'

Modal.setAppElement('#root')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TransactionsProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </TransactionsProvider>
    <ToastContainer />
  </React.StrictMode>
)
