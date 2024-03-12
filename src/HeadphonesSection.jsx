import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import headphone1mainimage from "./assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import headphone1gallery1 from "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import headphone1gallery2 from "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import headphone1gallery3 from "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

import headphone2mainimage from "./assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import headphone2gallery1 from "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import headphone2gallery2 from "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import headphone2gallery3 from "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";

import headphone3mainimage from "./assets/product-xx59-headphones/desktop/image-product.jpg";
import headphone3gallery1 from "./assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import headphone3gallery2 from "./assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import headphone3gallery3 from "./assets/product-xx59-headphones/desktop/image-gallery-3.jpg";

export default function HeadphonesSection(props) {


const headPhone1={
    newProduct:true,
    mainImage:headphone1mainimage,
    name:"XX99 MARK II HEADPHONES",
    details:"The new XX99 Mark II headphones iS the pinnacle Of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and preciston of studio-quality",
    price:"$ 2,999",
    feature1:"Featuring a genuine leather head strap anc premium earcups. these headphones deliver Superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space. the auto on/off and pause features ensure that you-II never miss a beat.",
    feature2:"The advanced Active Noise Cancellation with built-in equalizer allow you to your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. O compliant connectivity and 17 hour battery life the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern desjgn aesthetic.",
    inbox:[
        {quantity:"1x",
        product:"Headphone Unit"
        },
        {quantity:"2x",
        product:"Replacement Earcups"
        },
        {quantity:"1x",
        product:"User Manual"
        },
        {quantity:"1x",
        product:"3.5mm AudioCable"
        },
        {quantity:"1x",
        product:"Travel Bag"
        },
    ],
    visualImage1:headphone1gallery1,
    visualImage2:headphone1gallery2,
    visualImage3:headphone1gallery3,
}

const headPhone2={
    newProduct:false,
    mainImage:headphone2mainimage,
    name:"XX99 MARK I HEADPHONES",
    details:"As the gold standard for the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    price:"$ 1,750",
    feature1:"As the headphones ail others are measured aga.nst, the xxgg Mark I demonstrates over five decades Of audio expertise, redefining the critical listening ex;Hience. This pair Of closed-back headphones are made of industrial. aerospace-grade materials to emphasize durability at a relatively light we•ght of 11 oz.",
    feature2:"From the handcrafted microfiber ear Cushions to the robust metal headband with inner damping element. the components work together to deliver comfort and uncompromising sound. tts closed-back design delivers up to 27 dB of passive noise cancellation. reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
    inbox:[
        {quantity:"1x",
        product:"Headphone Unit"
        },
        {quantity:"2x",
        product:"Replacement Earcups"
        },
        {quantity:"1x",
        product:"User Manual"
        },
        {quantity:"1x",
        product:"3.5mm AudioCable"
        },
    ],
    visualImage1:headphone2gallery1,
    visualImage2:headphone2gallery2,
    visualImage3:headphone2gallery3,
}

const headPhone3={
    newProduct:false,
    mainImage:headphone3mainimage,
    name:"XX99 MARK I HEADPHONES",
    details:"The new XX99 Mark II headphones iS the pinnacle Of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and preciston of studio-quality",
    price:"$ 2,999",
    feature1:"Featuring a genuine leather head strap anc premium earcups. these headphones deliver Superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space. the auto on/off and pause features ensure that you-II never miss a beat.",
    feature2:"The advanced Active Noise Cancellation with built-in equalizer allow you to your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. O compliant connectivity and 17 hour battery life the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern desjgn aesthetic.",
    inbox:[
        {quantity:"1x",
        product:"Headphone Unit"
        },
        {quantity:"2x",
        product:"Replacement Earcups"
        },
        {quantity:"1x",
        product:"User Manual"
        },
        {quantity:"1x",
        product:"3.5mm AudioCable"
        },
        {quantity:"1x",
        product:"Travel Bag"
        },
    ],
    visualImage1:headphone3gallery1,
    visualImage2:headphone3gallery2,
    visualImage3:headphone3gallery3,
}

    function HandleItems(product){
       
        props.setProductDetails(product); 

        localStorage.setItem("productHeadphone",JSON.stringify(props.productDetails));
        

        
        
    }

  return (
    <section className='headphonesection'>

        {/* ROW 1 */}

        <div className="headphonesectioncardcontainer">

            <div className='headphonesectioncard headphonesectionimgcard1'>

            </div>

            <div className='headphonesectioncard headphonesectiontextcard1'>

                <div>
                    <h6>NEW PRODUCT</h6>
                    
                    <h2>XX99 MARK II<br/>HEADPHONES</h2>

                    <h5>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</h5>

                    <Link to="/Purchase"><button className='headphonesectiontextcardbutton' onClick={()=>HandleItems(headPhone1)}><h4>SEE PRODUCT</h4></button></Link>
                </div>

            </div>

        </div>

        {/* ROW 2 */}

        <div className="headphonesectioncardcontainer">


            <div className='headphonesectioncard headphonesectiontextcard1'>

            <div>
                    
                    
                    <h2>XX99 MARK I<br/>HEADPHONES</h2>

                    <h5>As the gold standard for headphones, the classic xxgg Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</h5>

                    <Link to="/Purchase"><button className='headphonesectiontextcardbutton' onClick={()=>HandleItems(headPhone2)}><h4>SEE PRODUCT</h4></button></Link>
                </div>

            </div>

            <div className='headphonesectioncard headphonesectionimgcard2'>

            </div>

        </div>

        {/* ROW 3 */}

        <div className="headphonesectioncardcontainer">

            <div className='headphonesectioncard headphonesectionimgcard3'>

            </div>

            <div className='headphonesectioncard headphonesectiontextcard1'>

                <div>
                    
                    
                    <h2>XX59<br/>HEADPHONES</h2>

                    <h5>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</h5>

                    <Link to="/Purchase"><button className='headphonesectiontextcardbutton' onClick={()=>HandleItems(headPhone3)}><h4>SEE PRODUCT</h4></button></Link>
                </div>

            </div>

        </div>
    </section>
  )
}
