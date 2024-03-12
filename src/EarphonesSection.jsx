import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import earphone1mainimage from "./assets/product-yx1-earphones/desktop/image-product.jpg";
import earphone1gallery1 from "./assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import earphone1gallery2 from "./assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import earphone1gallery3 from "./assets/product-yx1-earphones/desktop/image-gallery-3.jpg";



export default function EarphonesSection(props) {

  const earphone1={
    newProduct:true,
    mainImage:earphone1mainimage,
    name:"ZX9 SPEAKER",
    details:"Upgrade your sound system with the all new ZX9 active speaker It's a bookshelf system that offers truly wireless connectivity - creating new possibilities for more pleasing and practical audio setups.",
    price:"$ 4,500", feature1:"Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-a Stereo RCA. and Stereo XLR nputS, allowing you to have up to five wired source devices connected for easy switching Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)",
    feature2:"Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter Equally is its powerful room-shaking bass courtesy of a 6.5 • aluminum allov bass unit. You'll be able to enjoy equal sound quality wnether in a large rcom or small den. Furthermore, you Will experience new sensations trom old songs since it can respond to even the subtle waveforms.",
    inbox:[
        {quantity:"2x",
        product:"Speaker Unit"
        },
        {quantity:"2x",
        product:"Speaker Cloth Panel"
        },
        {quantity:"1x",
        product:"User Manual"
        },
        {quantity:"1x",
        product:"3.5mm AudioCable"
        },
        {quantity:"1x",
        product:"10m Optical Cable"
        },
    ],
    visualImage1:earphone1gallery1,
    visualImage2:earphone1gallery2,
    visualImage3:earphone1gallery3,
} 

function HandleItems(product){
  
  props.setProductDetails(product);  

  
   
}
  
  return (
    <section className='headphonesection'>

        {/* ROW 1 */}

        <div className="headphonesectioncardcontainer">

            <div className='headphonesectioncard earphonessectionimgcard1'>

            </div>

            <div className='headphonesectioncard earphonessectiontextcard1'>

                <div>
                    <h6>NEW PRODUCT</h6>
                    
                    <h2>YXI WIRELESS<br/>EARPHONES</h2>

                    <h5>Tailor your listening experience with bespoke dynamic drivers from the new YXI Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</h5>

                    <Link to="/Purchase"><button className='headphonesectiontextcardbutton' onClick={()=>HandleItems(earphone1)}><h4>SEE PRODUCT</h4></button></Link>
                </div>

            </div>

        </div>
    </section>
  )
}
