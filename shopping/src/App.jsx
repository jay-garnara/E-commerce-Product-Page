
import './App.css'
import Navbar from './component/Navbar'
import Product from './component/Product'
import ProductDetail from './component/ProductDetail';
import SearchItem from './component/SearchItem';
import Cart from './component/Cart';
import { createBrowserRouter, data, RouterProvider } from 'react-router-dom';

import { useState } from 'react';
import MainLayout from './component/MainLayout';





function App() {


  const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout />
  },
  {
    path:'/product/:id',
    element:
    <div>
      <Navbar />
      <ProductDetail />
    </div>
  },
  {
    path:'/search/:term',
    element:<SearchItem />
  },
  {
    path:'/cart',
    element:<Cart />
  }
]);

  return (
    <>
    <div>
      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App

  // const head = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems:'center',
  //   marginTop:'2rem',
  //   backgroundColor:'purple',
  //   color:'white',
  //   padding:'.9rem'

  // }

   // <div className='heading' style={head}>
    //  Hello Jay Garnara
    // </div>