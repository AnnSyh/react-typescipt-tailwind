import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { LocomotiveScrollPage } from './pages/LocomotiveScrollPage';
import { ProductsPage } from './pages/ProductsPage';
import { Navigation } from './companents/Navigation'

import Alert from './alert/Alert';
import { AlertProvider } from "./alert/AlertContext";

function App() {
  return (
    // <AlertProvider value={alert}>
    <AlertProvider>
      <Alert />
      <Navigation />
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/locomotive-scroll' element={<LocomotiveScrollPage />} />
      </Routes>
    </AlertProvider>
  )
}

export default App;
