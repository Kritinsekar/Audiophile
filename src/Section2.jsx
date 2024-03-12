import React from 'react';
import headphones from "./assets/product-xx99-mark-one-headphones/desktop/transparent headphones.png";
import earphones from "./assets/product-yx1-earphones/desktop/transparent earphone.png";
import speakers from "./assets/product-zx7-speaker/desktop/transparent speaker.png";
import { Link } from 'react-router-dom';

export default function Section2() {


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

  return (
    <section className='section2'>

        {/* CARD 1 */}

        <div className="section2card">
            <img src={headphones} alt="Headphone" className='section2cardimage'/>

            <div className='s2contentdiv'>
            <h3>headphones</h3>

            <div className='s2paradiv'>

            <Link className="shoplink" to="/Headphones" onClick={scrollToTop}><h6>shop</h6></Link>
            <Link to="/Headphones" onClick={scrollToTop}><svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></Link>
            </div>

            </div>
        </div>

        {/* CARD 2 */}

        <div className="section2card">
            <img src={speakers} alt="Headphone" className='section2cardimage'/>

            <div className='s2contentdiv'>
            <h3>speakers</h3>

            <div className='s2paradiv'>
            <Link className="shoplink" to="/Speakers" onClick={scrollToTop}><h6>shop</h6></Link>
            <Link  to="/Speakers" onClick={scrollToTop}><svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></Link>
            </div>

            </div>
        </div>

        {/* CARD 3 */}

        <div className="section2card">
            <img src={earphones} alt="Headphone" className='section2cardimage'/>

            <div className='s2contentdiv'>
            <h3>earphones</h3>

            <div className='s2paradiv'>
            <Link className="shoplink" to="/Earphones" onClick={scrollToTop}><h6>shop</h6></Link>
            <Link  to="/Earphones" onClick={scrollToTop}><svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg></Link>
            </div>

            </div>
        </div>


    </section>
  )
}
