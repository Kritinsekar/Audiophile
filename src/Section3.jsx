import React from 'react'
// import section3speaker from "./assets/product-zx9-speaker/desktop/image-category-page-preview-removebg-preview.png";
import section3speaker from "./assets/shared/desktop/image-category-thumbnail-speakers.png";
import patterncircles from "./assets/home/desktop/pattern-circles.svg";
import { Link } from 'react-router-dom';

export default function Section3(props) {

    const scrollToTop=props.scrollToTop;

  return (

    <section className='section3'>

        {/* CARD 1 */}

            <div className="section3card1">
                

                <img src={section3speaker} alt="Speaker" className='section3image' />
                
                <div className="s3texts">
                
                    <div>
                    <h2>ZX9<br/>SPEAKER</h2>
                    <h5>
                    Upgrade to premium speakers that are<br/>
                    phenomenally built to deliver truly remarkable<br/>
                    sound.
                    </h5>
                    </div>

                    <Link to="/Headphones" ><button className="s3subproduct" onClick={scrollToTop}><h4>SEE PRODUCT</h4></button></Link>
            
                </div>
                
            </div>

        {/* CARD 2 DIIFERENT STRUCTURE */}

            <div className="section3card2">

                <div className="s3card2text">
                    <h3>ZX7 SPEAKER</h3>
                    <Link to="/Headphones" ><button className="s3subproduct" onClick={scrollToTop}><h4>SEE PRODUCT</h4></button></Link>
                </div>

            </div>

        {/* CARD 3 DIIFERENT STRUCTURE */}


            <div className="section3card3">

                {/* SUB-CARD 1 */}

                <div className="subcard3 s3subcard1">

                </div>

                 {/* SUB-CARD 2 */}

            

                 <div className="subcard3 s3subcard2">
                    <h3>YX1 EARPHONES</h3>
                    <Link to="/Earphones" ><button className="s3subproduct" onClick={scrollToTop}><h4>SEE PRODUCT</h4></button></Link>
                </div>

            </div>

           

           

    </section>

  )
}
