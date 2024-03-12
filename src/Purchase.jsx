import React from 'react';
import Header from "./Header";
import {useState} from "react";
import {Link} from "react-router-dom"

export default function Purchase(props) {

    let [productCount,setProductCount]=useState(1);

    function handleIncreaseCount(){
      setProductCount(productCount+1);
    }

    function handleDecreaseCount(){
      productCount-1>0?setProductCount(productCount-1):setProductCount(1);
    }

    function handleCart(cartImage,cartName,cartPrice,cartQuantity){

        let items={
          cartImage:cartImage,
          cartName:cartName,
          cartPrice:cartPrice,
          cartQuantity:cartQuantity,
        }


        props.setCartItems([...props.cartItems,items]);

        localStorage.setItem("storedCartItems",JSON.stringify(props.cartItems));

        console.log(props.cartItems);

    }


  return (
    <>

    <Header cartActive={props.cartActive} setCartActive={props.setCartActive}/>

    <section className='purchaseheader'>
    </section>

    <section className='productsection'>
        <Link to="/" className='gobacklink'><h6 className='goback'>Go Back</h6></Link>

        <div className="productcard">

            <div className="productsubimgcard productmainimg" style={{"backgroundImage":`url(${props.productDetails.mainImage})`}}>
                
            </div>

            <div className="productsubtextcard">

              {props.productDetails.newProduct?

              <div>
              <h6 className='productsubtextcardh6'>New Product</h6>
              <h2 className='productsubtextcardh2'>{props.productDetails.name}</h2>
              <h5 className='productsubtextcardh5'>{props.productDetails.details}</h5>
              <h3 className='productprice'>{props.productDetails.price}</h3>
              
              <div className='productpurchasediv'>

                <div className="productcount">
                    <button className='increasedecreasebutton' onClick={handleDecreaseCount}>-</button>
                    <h3>{productCount}</h3>
                    <button className='increasedecreasebutton' onClick={handleIncreaseCount}>+</button>
                </div>

                <button className='productsubtextcardbutton' onClick={()=>handleCart(props.productDetails.mainImage,props.productDetails.name,props.productDetails.price,productCount)}>ADD TO CART</button>

              </div>
              </div>
              
              :
          
              <div>
              <h2 className='productsubtextcardh2'>{props.productDetails.name}</h2>
              <h5 className='productsubtextcardh5'>{props.productDetails.details}</h5>
              <h3 className='productprice'>{props.productDetails.price}</h3>
              
              <div className='productpurchasediv'>

                <div className="productcount">
                    <button className='increasedecreasebutton' onClick={handleDecreaseCount}>-</button>
                    <h3>{productCount}</h3>
                    <button className='increasedecreasebutton' onClick={handleIncreaseCount}>+</button>
                </div>

                <button className='productsubtextcardbutton' onClick={()=>handleCart(props.productDetails.mainImage,props.productDetails.name,props.productDetails.price,productCount)} >ADD TO CART</button>

              </div>
              </div>
              }

            </div>

        </div>
        
        <div className="featuressection">

          <div className='featuresleft'>

          <h2>FEATURES</h2>
          <h5>{props.productDetails.feature1}</h5>
          <h5>{props.productDetails.feature2}</h5>
          
          </div>

          <div className="featuresright">

          <h2>IN THE BOX</h2>
          {props.productDetails.inbox.map((items)=>(
            // <div className='inboxrow'>
            // <h3 className='inboxquantityh5'>{items.quantity}</h3>
            // <h5>{items.product}</h5>
            // </div>

            <h3 className='inboxtext'><span className='inboxquantity'>{items.quantity}</span>{items.product}</h3>
          ))}
          
          </div>

        </div>

        <div className="productimagescontainer">

          <div className="productimagesleft">

            <div className="productimage1" style={{"backgroundImage":`url("${props.productDetails.visualImage1}")`}}>

            </div>

            <div className="productimage1" style={{"backgroundImage":`url("${props.productDetails.visualImage2}")`}}>

            </div>
            
          </div>

          <div className="productimagesright">
            
            <div className="productimage2" style={{"backgroundImage":`url("${props.productDetails.visualImage3}")`}}>

            </div>

          </div>

        </div>
    </section>

    </>
  )
}
