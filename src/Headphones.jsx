import React from 'react';
import Header from './Header';
import HeadphonesSection from './HeadphonesSection';


export default function Headphones(props) {
  return (
    <>
        <Header cartActive={props.cartActive} setCartActive={props.setCartActive}/>

        <section className='headphonesheadertab'>
            <h3 className='heading'>HEADPHONES</h3>
        </section>

        <HeadphonesSection productDetails={props.productDetails} setProductDetails={props.setProductDetails}/>
    </>
  )
}
