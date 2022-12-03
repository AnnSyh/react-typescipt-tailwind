import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { LocomotiveScrollPage } from './pages/LocomotiveScrollPage';
import { ProductsPage } from './pages/ProductsPage';
import { Navigation } from './companents/Navigation'

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline text-red-500"> Hello world!</h1> */}
      <Navigation />
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/locomotive-scroll' element={<LocomotiveScrollPage />} />
        {/* <Route path='/about' element={<AboutPage />} /> */}
      </Routes>
    </>
  )
}

export default App;
