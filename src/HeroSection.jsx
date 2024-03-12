import React from 'react';
import Header from './Header';
import heroheadphone from "./assets/home/desktop/image-hero.jpg";
import {Link} from "react-router-dom";
import Cart from './Cart';


export default function HeroSection(props) {
  return (
    <section className='section1'>


           
            <Header cartActive={props.cartActive} setCartActive={props.setCartActive}/>
           
        

                <hr/>

                <div className="section1contents">
                    <div>
                    <h6>NEW PRODUCT</h6>
                    <h2>XX99 MARK II<br/>HEADPHONES</h2>
                    <h5>
                    Experience natural, life like audio and exceptional<br/>
                    build quality made for the passionate music<br/>
                    enthusiast.
                    </h5>
                    </div>

                    <Link to="/Headphones"><button className="section1seeproduct">see product</button></Link>
                    
                </div>
    </section>
  )
}
