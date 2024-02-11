import './App.css';
import  React, { useState } from 'react';
import {Navbar} from './components/Navbar'
import { Routes,Route } from 'react-router-dom';
import  {Home} from "./pages/Home";
import  {Cart} from "./pages/Cart";

function App() {
  return (
    <div className="">
      <Navbar/>

      <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>

      </Routes>

    </div>
  );
}

export default App;
