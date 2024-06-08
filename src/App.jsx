import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Viewcart from "./Components/Viewcart"
import "./App.css";
import { useState,createContext } from "react";

export const cartContext = createContext();



function App() {
  const [cart,setCart] =useState([]);

 
  

  return (
    <><cartContext.Provider value={{cart,setCart}}><BrowserRouter>
    <Header cart={cart} />
    <div className="container">
     <Routes>
       <Route path="/" element={<Home  />} ></Route>
       <Route path="/Cart" element={<Viewcart  />}></Route>
     </Routes>
    </div>
        </BrowserRouter></cartContext.Provider>
      </>
  )
}

export default App
