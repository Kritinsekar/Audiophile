import React from 'react';
import Header from './Header';
import SpeakersSection from './SpeakersSection';

export default function Speakers(props) {
  return (
    <>
        <Header cartActive={props.cartActive} setCartActive={props.setCartActive}/>

        <section className='headphonesheadertab'>
            <h3 className='heading'>SPEAKERS</h3>
        </section>

        <SpeakersSection productDetails={props.productDetails} setProductDetails={props.setProductDetails}/>
    </>
  )
}
