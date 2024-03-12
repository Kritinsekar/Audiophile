import {useState,useEffect} from "react";
import HeroSection from "./HeroSection";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Footer from "./Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Headphones from "./Headphones";
import Speakers from "./Speakers";
import Earphones from "./Earphones";
import Purchase from "./Purchase";
import Cart from "./Cart";
import Header from "./Header";
import Checkout from "./Checkout";




export default function App(){

    let[productDetails,setProductDetails]=useState({});
    let [cartItems,setCartItems]=useState([]);
    let[cartActive,setCartActive]=useState(false);

    let storedValues=JSON.parse(localStorage.getItem("storedCartItems"));
    
    useEffect(() => {
        
        const storedValues = JSON.parse(localStorage.getItem("storedCartItems"));
        const headphoneSaved=JSON.parse(localStorage.getItem("productHeadphone"));
        

       
        if (storedValues !== null) {
            setCartItems(storedValues);
            setProductDetails(headphoneSaved);
            console.log(productDetails);
        }
    }, []);

    

   

    function scrollToTop(){
        window.scrollTo({top:0});
    }



    return(
        <>
        <BrowserRouter>
            <Routes>


                {/* ROUTE 1 */}
                    <Route path="/" element={

                    <>
                    <Cart cartActive={cartActive} setCartActive={setCartActive} cartItems={cartItems} setCartItems={setCartItems} productDetails={productDetails} />
                    <HeroSection cartActive={cartActive} setCartActive={setCartActive} productDetails={productDetails} setProductDetails={setProductDetails}/>
                    <Section2 scrollToTop={scrollToTop}/>
                    <Section3/>
                    <Section4/> 
                    <Footer/>
                    </>

                    }/>

                {/* ROUTE 2 */}
                <Route path="/Headphones" element={

                    <>
                    <Cart cartActive={cartActive} setCartActive={setCartActive} cartItems={cartItems} setCartItems={setCartItems} productDetails={productDetails} />
                    <Headphones cartActive={cartActive} setCartActive={setCartActive} productDetails={productDetails} setProductDetails={setProductDetails}/>
                    <Section2 scrollToTop={scrollToTop}/>
                    <Section4/> 
                    <Footer/>
                    </>

                    }/>

                {/* ROUTE 3 */}
                <Route path="/Speakers" element={

                    <>
                    <Cart cartActive={cartActive} setCartActive={setCartActive} cartItems={cartItems} setCartItems={setCartItems} productDetails={productDetails} />
                    <Speakers cartActive={cartActive} setCartActive={setCartActive} productDetails={productDetails} setProductDetails={setProductDetails} cartItems={cartItems} setCartItems={setCartItems}/>
                    <Section2 scrollToTop={scrollToTop}/>
                    <Section4/> 
                    <Footer/>
                    </>

                    }/>

                {/* ROUTE 4 */}
                <Route path="/Earphones" element={

                    <>
                    <Cart cartActive={cartActive} setCartActive={setCartActive} cartItems={cartItems} setCartItems={setCartItems} productDetails={productDetails} />
                    <Earphones cartActive={cartActive} setCartActive={setCartActive} productDetails={productDetails} setProductDetails={setProductDetails}/>
                    <Section2 scrollToTop={scrollToTop}/>
                    <Section4/> 
                    <Footer/>
                    </>

                }/>


                {/* ROUTE 5 */}
                <Route path="/Purchase" element={

                <>  
                    <Cart cartActive={cartActive} setCartActive={setCartActive} cartItems={cartItems} setCartItems={setCartItems} productDetails={productDetails} />
                    <Purchase cartActive={cartActive} setCartActive={setCartActive} productDetails={productDetails} setProductDetails={setProductDetails} cartItems={cartItems} setCartItems={setCartItems}/>
                    <Section2 scrollToTop={scrollToTop}/>
                    <Section4/> 
                    <Footer/>
                    </>

                }/>


                {/* ROUTE 6 */}

                <Route path="/Checkout" element={
                <>
                    <Checkout cartItems={cartItems} setCartItems={setCartItems}/>
                    <Footer/>
                </>

                }/>

            </Routes>

        </BrowserRouter>  
        </>
    )
}