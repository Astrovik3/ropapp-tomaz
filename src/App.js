import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/categoria/:category" element={<ItemListContainer greeting={"NUESTROS PRODUCTOS"}/>} />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />

        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

/* <Route exact path='/' component={Home} /> */


export default App;
