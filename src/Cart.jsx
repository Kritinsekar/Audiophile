import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Cart(props) {

  let [itemCount,setItemCount]=useState(1);

  let[totalPrice,setTotalPrice]=useState(0);

  function handleItemDecrement(){
    itemCount-1>0?setItemCount(itemCount-1):setItemCount(1);
  }

  function handleItemIncrement(){
    setItemCount(itemCount+1);
  }

  function handleDeteleCartItems(){
    props.setCartItems([]);
    setItemCount(1);
  }

  return (
    <div className={`cart ${props.cartActive?"showcart":""}`}>
      

      <div className="cartheader">
         <h3>{`CART (${props.cartItems.length})`}</h3>
         <h5 onClick={handleDeteleCartItems}>Remove all</h5>
      </div>

      {props.cartItems.length===0?<h6 className='cartempty'>Your Cart Is Empty</h6>:""}

          {props.cartItems.map((items)=>(
            <div className="cartrow">

              <div className='cartimageandtext'>
            <img className='cartitemimg' src={items.cartImage} alt={items.cartName}/>
  
            <div>
              <h4 className='cartitemname'>{items.cartName}</h4>
              <h6 className='cartitemprice'>{items.cartPrice}</h6>
            </div>
              </div>
  
            <div className="cartproductcount">
                    <button className='cartincreasedecreasebutton' onClick={handleItemDecrement}>-</button>
                    <h3>{itemCount}</h3>
                    <button className='cartincreasedecreasebutton' onClick={handleItemIncrement}>+</button>
            </div>

          </div>
      

          ))}

          {props.cartItems.length===0?"":

            <div className="cartcheckout">
              <div className='carttotal'>
                <h6 className='cartitemprice'>Total</h6>
                <h4 className='cartitemname'>$5000</h4>
              </div>

              <Link to="/Checkout"><button className="checkout">CHECKOUT</button></Link>
            </div>}

      </div>
        
  )
}
