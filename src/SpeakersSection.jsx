import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import speaker1mainimage from "./assets/product-zx9-speaker/desktop/image-product.jpg";
import speaker1gallery1 from "./assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import speaker1gallery2 from "./assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import speaker1gallery3 from "./assets/product-zx9-speaker/desktop/image-gallery-3.jpg";

import speaker2mainimage from "./assets/product-zx7-speaker/desktop/image-product.jpg";
import speaker2gallery1 from "./assets/product-zx7-speaker/desktop/image-gallery-1.jpg";
import speaker2gallery2 from "./assets/product-zx7-speaker/desktop/image-gallery-2.jpg";
import speaker2gallery3 from "./assets/product-zx7-speaker/desktop/image-gallery-3.jpg";




export default function SpeakersSection(props) {

    const speaker1={
        newProduct:true,
        mainImage:speaker1mainimage,
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
        visualImage1:speaker1gallery1,
        visualImage2:speaker1gallery2,
        visualImage3:speaker1gallery3,
    }
    
    const speaker2={
        newProduct:false,
        mainImage:speaker2mainimage,
        name:"ZX7 SPEAKER",
        details:"Stream high quality sound wirelessly with minimal to no loss, The ZX7 speaker uses high-end audiophile components that represents the top of tne line speakers for home or Studio use.",
        price:"$ 3,500", 
        feature1:"Reap the advantages of a fiat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower bookshelf cannot provide. The woofers are made from aluminum that produces a unique and clear sound, XLR nputs allow you to connect to a mixer for more advanced usage.",
        feature2:"The ZX7 Speaker iS the blend Of Styl iSh design and high It houses an encased MOF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluet.nth or trad itional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
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
            product:"3.5mm 7.5m AudioCable"
            },
            {quantity:"1x",
            product:"7.5m Optical Cable"
            },
        ],
        visualImage1:speaker2gallery1,
        visualImage2:speaker2gallery2,
        visualImage3:speaker2gallery3,
    }
    
    
        function HandleItems(product){
           
            props.setProductDetails(product);  
             
        }

        

        
  return (
    <section className='headphonesection'>

        {/* ROW 1 */}

        <div className="headphonesectioncardcontainer">

            <div className='headphonesectioncard speakerssectionimgcard1'>

            </div>

            <div className='headphonesectioncard speakerssectiontextcard1'>

                <div>
                    <h6>NEW PRODUCT</h6>
                    
                    <h2>ZX9<br/>SPEAKER</h2>

                    <h5>Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity - creating new possibilities for more pleasing and practical audio setups.</h5>

                    <Link to="/Purchase"><button className='headphonesectiontextcardbutton' onClick={()=>HandleItems(speaker1)}><h4>SEE PRODUCT</h4></button></Link>


                </div>

            </div>

        </div>

        {/* ROW 2 */}

        <div className="headphonesectioncardcontainer">


            <div className='headphonesectioncard speakerssectiontextcard1'>

            <div>
                    
                    
                    <h2>ZX7<br/>SPEAKERS</h2>

                    <h5>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</h5>

                    <Link to="/Purchase"><button className='headphonesectiontextcardbutton' onClick={()=>HandleItems(speaker2)}><h4>SEE PRODUCT</h4></button></Link>

                </div>

            </div>

            <div className='headphonesectioncard speakerssectionimgcard2'>

            </div>

        </div>
    </section>
  )
}
