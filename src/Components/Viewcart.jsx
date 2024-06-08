import {  useEffect, useState } from "react"
import "../Components/Viewcart.css"
import { useContext } from "react";
import { cartContext } from "../App";

const Viewcart = () => {
    const{cart}= useContext(cartContext);

    const[total,setTotal]=useState(0);
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))
    },[cart])
  return (

    <><h1 className="cart-heading">Cart Products</h1><div className="cart-container">
    {cart.map((element)=>(<div className="cart-product" key={element.id}>
        <div className="img">
            <img src={element.pic} alt="image"></img>
        </div>
        <div className="cart-product-details">
            <h3>{element.name}</h3>
            <p>Price Rs :{element.amt}</p>

        </div>
    </div>))}
   
   

</div>
<h2 className="cart-amt">Total Amount Rs:{total}</h2></>
  )
}

export default Viewcart
