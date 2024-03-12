import React from 'react';
import Header from './Header';
import EarphonesSection from './EarphonesSection';

export default function Earphones(props) {
  return (
    <>
        <Header cartActive={props.cartActive} setCartActive={props.setCartActive}/>

        <section className='headphonesheadertab'>
            <h3 className='heading'>EARPHONES</h3>
        </section>

        <EarphonesSection productDetails={props.productDetails} setProductDetails={props.setProductDetails}/>
    </>
  )
}