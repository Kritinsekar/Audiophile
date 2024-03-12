import React from 'react';
import Header from "./Header";
import {useState} from "react";
import {Link} from "react-router-dom";
import tick from "../src/assets/checkout/icon-order-confirmation.svg"


export default function Checkout(props) {

  let[paymentMode,setPaymentMode]=useState("");
  let[emailValid,setEmailValid]=useState(true);
  let[mobileValid,setMobileValid]=useState(true);
  let [modalActive,setModalActive]=useState(false);


  // FORM FUNCTIONS

  function handleEmailError(e){
    if(e.target.value.length!==0 && !e.target.value.includes("@") ){
      setEmailValid(false);
    }else{
      setEmailValid(true);
    }
  }

  function handleMobileNumberError(e){
      if(e.target.value.length!==0 && e.target.value.length>10){
        setMobileValid(false);
      }else{
        setMobileValid(true);
      }

      console.log(mobileValid);
  }


 // OTHER FUNCTIONS

  function handlePaymentType(e){
    setPaymentMode(e.target.value);
    console.log(paymentMode);
    console.log(props.cartItems);
  }


  function handleModal(){
    setModalActive(true);
  }

  return (
    <>

    <div className="checkoutheader">

    <Header/>

    </div>

    

    <section className='checkoutsection'>
    
      
            
           <Link to="/"><h4 className="checkoutgoback">Go Back</h4></Link>


            {/* MAIN CONTAINER */}

            <div className='checkoutcontainermain'>
        
            <form id="contactform" className="checkoutform">

              <h3 className='checkouttext'>CHECKOUT</h3>

              {/* BILLING DETAILS CONTAINER */}

              <div className="billdetailcontainer">

              <h4 className="billingdetailstext">billing details</h4>

              {/* form with two input in  a row */}

              <div className="formrow">
                
                {/* single form cell */}

                <div className="singleform">
                <label for="name">Name</label>
                <input type="text" class="forminput" name='name' placeholder='kritin' required/>
                </div>

                <div className="singleform">
                <label for="emailaddress">email address <span className={`notvalidtext ${emailValid?"":"displayerror"}`}>Please Enter a valid email !</span></label>
                <input onChange={handleEmailError} type="email" class="forminput" name='emailaddress' placeholder='kritin@gmail.com' required/>
                </div>

                {/* ENDS */}

              </div>

              {/* ENDS */}

              <div className="singleform">
                <label for="phonenumber">phone number <span className={`notvalidtext ${mobileValid?"":"displayerror"}`}>Please Enter a valid Phno. !</span></label>
                <input onChange={handleMobileNumberError} type="number" class="forminput" name='phonenumber' placeholder='+91 8462902813' required/>
              </div>

              </div>

                {/* SHIPPING INFO */}

              <div className="shippinginfocontainer">

                <h4 className="billingdetailstext shipinfotext">SHIPPING INFO</h4>

                <div className="singleform shipinform">
                <label for="emailaddress">Address</label>
                <input type="text" class="forminput" name='address' placeholder='Anna Nagar' required/>
                </div>

                  {/* form with two input in  a row */}

              <div className="formrow shippinformrow">
                
                {/* single form cell */}

                <div className="singleform">
                <label for="zipcode">zip code</label>
                <input type="number" class="forminput" name="zipcode" placeholder='600132' required/>
                </div>

                <div className="singleform">
                <label for="city">City</label>
                <input type="text" class="forminput" name='city' placeholder='Chennai' required/>
                </div>


                {/* ENDS */}

              </div>

              {/* ENDS */}

              <div className="singleform">
                <label for="country">Country</label>
                <input type="text" class="forminput" name='country' placeholder='India' required/>
              </div>



              </div>


              {/* PAYMENT DETAILS */}

              <div className="paymentdetailscontainer">

                <h4 className="billingdetailstext shipinfotext">Payment details</h4>

                <div className="paymentmethodcontainer">

                    <h3>Payment Method</h3>

                    <div onChange={handlePaymentType}>
                      <div className="modes">
                        <input type="radio" value="emoney" name='form1' className='checkboxinput' required/>
                        <h3>e-Money</h3>
                      </div>

                      <div className="modes">
                        <input type="radio" value="cod"  name='form1' className='checkboxinput' required/>
                        <h3>Cash On Delivery</h3>
                      </div>
                    </div>

                </div>


                {/* form with two input in  a row */}

              <div className="formrow paymentrow">
                
                {/* single form cell */}

                {paymentMode==="cod"?
                <>
                 <div className="modes">
                    <input type="radio" value="confirm"  name='confirm' className='checkboxinput'/>
                    <h3>Confrom</h3>
                  </div>
                </> 

                :
                <>
                  <div className="singleform">
                  <label for="e-Money Number">e-Money Number</label>
                  <input type="number" class="forminput" name='e-Money Number' placeholder='6268246'/>
                  </div>

                  <div className="singleform">
                  <label for="e-Money Pin">e-Money Pin</label>
                  <input type="number" class="forminput" name='e-Money Pin' placeholder='1250'/>
                  </div>
                </>

                

                
                }

          

                {/* ENDS */}

              </div>

              {/* ENDS */}



              </div>

            </form>
            


            <div className="sidecart">

            <h3 className='checkouttext summary'>SUMMARY</h3>

              <div className='checkoutcartitems'>

                {props.cartItems.map((items)=>(
                  
                    <div className="cartrow">

                        <div className='cartimageandtext'>
                        <img className='cartitemimg' src={items.cartImage} alt={items.cartName}/>

                        <div>
                        <h4 className='cartitemname'>{items.cartName}</h4>
                        <h6 className='cartitemprice'>{items.cartPrice}</h6>
                        </div>
                        </div>

                        <div>

                              <h3 className='cartproductscount'>x1</h3>
                              
                        </div>

                    </div>

                    
                  
                ))}


              </div>

                <div className="textrow">
                  <h3 className='textrowfaded'>TOTAL</h3>
                  <h3 className='textrowbold'>$5000</h3>
                </div>

                <div className="textrow">
                  <h3 className='textrowfaded'>SHIPPPING</h3>
                  <h3 className='textrowbold'>$50</h3>
                </div>

                <div className="textrow">
                  <h3 className='textrowfaded'>VAT (INCLUDED)</h3>
                  <h3 className='textrowbold'>$1079</h3>
                </div>

                <div className="textrow">
                  <h3 className='textrowfaded'>GRAND TOTAL</h3>
                  <h3 className='textrowbold grandtotalprice'>$3000</h3>
                </div>

                <button className="continuepay" type="submit" form="contactform" onClick={handleModal}>CONTINUE & PAY</button>
          
            </div>
            </div>

            {modalActive?
            <>

            <div className="modal">
                  <img src={tick} alt='order placed' className='tickmark'/>

                  <h3 className='checkouttext thankyoutext'>THANK YOU <br/>FOR YOUR ORDER</h3>

                  <h4 className="checkoutgoback">You will receive an email confirmation shortly.</h4>

                  <div className="orderstatuscontainer">

                    <div className='orderstatus1'>

                       <div className="orderstatuscard">

                        <img src={props.cartItems[0].cartImage} alt="product" className='orderimage'/>

                          <div>

                              <div className='orderdetailsrow'>
                              <h3 className='ordername'>{props.cartItems[0].cartName}</h3>
                              <h3 className='orderquantity'>x{props.cartItems[0].cartQuantity}</h3>
                              </div>

                              <h3 className='orderprice'>{props.cartItems[0].cartPrice}</h3>

                          </div>

                          

                        </div>

                        <h5 className='otheritems'>And {props.cartItems.length-1} other item(s)</h5>

                        
                    </div>

                    <div className='orderstatus2'>
                        <h4>GRAND TOTAL</h4>

                        <h3>$5000</h3>
                    </div>

                  </div>

                <Link to="/"><button className="continuepay backtohome">BACK TO HOME</button></Link>

            </div>
            </>
            :
            <>
            </>
            }

      
    </section>

    </>
    
    
  )
}
