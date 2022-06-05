import React from 'react';
// import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
    <div className="hero">

<div className="bg-lines">
    <img src="assets/Images/backdround-lines.png" alt=""/>
</div>
<div className="bg-shade">
    <img src="assets/Images/bg-shade.png" alt=""/>

</div>
<div className="spiral-line">
    <div className="img-1">
        <img src="assets/Images/polygon.png" alt=""/>
    </div>
    <div className="img-2">
        <img src="assets/Images/spiral-line.png" alt=""/>
    </div>
</div>
<div className="arrow-1">
    <div className="img-1">
        <img src="assets/Images/Arrow-1Stroke.png" alt=""/>
    </div>
    <div className="img-2">
        <img src="assets/Images/arrow-1.png" alt=""/>
    </div>
</div>

<div className="container">
    <div className="row">
        <div className="col-md-6 order-md-1 order-2">
            <div className="d-flex align-items-center">
                <div className="content ">


                    <span className="sub-head">
                        <span className="circle"><img className="heart-img" width="14px" height="14px"
                                src="assets/Images/heart.png" alt=""/></span> People Love Maa Amma
                    </span>
                    <h1><span className="yel">Home Cooked <br/></span> <span className="light-txt">Food away from</span>
                        <br/><span className="orn home-2">Home.</span>
                    </h1>
                    {/* <!-- <img width="214px" className="underline-img" src="assets/Images/underline.svg" alt=""> --> */}

                    <p>Because they care the most,Empower them by accepting their homecook food.
                    </p>
                    <div className="search-box mt-5">
                        <div className="location"><img width="16px" src="assets/Images/location.png" alt=""/></div>
                        <input type="text" placeholder="Enter Your zip code" className="search-input"/>
                        <button className="search"><img width="20px" height="20px" src="assets/Images/search-white.png"
                                alt=""/></button>
                    </div>
                     {/* <Link to="">Order Now <i className="fa-solid fa-right-long"></i></Link> */}
                    <div className="floating-orange">
                        <img src="assets/Images/Orange.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 order-md-2 order-1">
            <div className="cont-img">
<div className="container-bg">
<img src="assets/Images/Ellipse-bg.png" alt=""/>
</div>
                <div className="review-dish-bx">
                    <div className="review-dish p-2 d-flex">
                        <div className="review-dish-img">
                            <img src="assets/Images/review-dish.png" alt=""/>
                        </div>
                        <div className="review-dish-txt my-auto ps-2">
                            <p>Paneer Tikka</p>
                            <p>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </p>
                            <p>₹280</p>
                        </div>
                    </div>
                </div>
                <div className="happy-bx">
                    <img src="assets/Images/happy.png" alt=""/>
                </div>
                <div className="fire">
                    <img src="assets/Images/emojione_fire.png" alt=""/>
                </div>
                <div className="seekpng">
                    <img src="assets/Images/SeekPng.png" alt=""/>
                </div>
                <div className="sparks1">
                    <img src="assets/Images/sparks.png" alt=""/>
                </div>
                <div className="sparks2">
                    <img src="assets/Images/sparks.png" alt=""/>
                </div>
                <div className="mint">
                    <img src="assets/Images/Mint.png" alt=""/>
                </div>
                <div className="center-dish">
                    <img src="assets/Images/center-dish.png" alt=""/>
                </div>

                <div className="dish1 dish">
                    <img src="assets/Images/dish1.png" alt=""/>
                </div>
                <div className="dish2 dish">
                    <img src="assets/Images/dish2.png" alt=""/>
                </div>
                <div className="dish3 dish">
                    <img src="assets/Images/dish3.png" alt=""/>
                </div>
                <div className="dish4 dish">
                    <img src="assets/Images/dish4.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    </>
  )
}
