import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAddRemoveItem from '../Extras/ButtonAddRemoveItem';

const Add_cart = () => {
  return (
    <>
 {/* <div className="cart sticky"> */}

<div className="cart-heading">
    <h3>My Cart <span>(1 item)</span></h3>
</div>
<div className="item-box2 mb-5">
    <div className="row px-2 bord-dashed">
        <div className="col-3 p-0 pos-rel">
            <div className="item-img2 ms-auto ">
                <img src="assets/Images/cake-item.png" alt=""/>


            </div>

        </div>
        <div className="col-9">
            <div className="item-txt2 p-1 my-auto">
                <h6>Fresh Cream Mango Pastry [1 Piece]</h6>
                <span className="price"><span className="rs2">₹</span>200</span>
                <div className="btn-span d-flex justify-content-between mt-1 mb-2">
                    <ButtonAddRemoveItem/>
                    <div className="coupon">
                        <Link className="apply" to="">Apply Coupon</Link>
                    </div>
                </div>
            </div>
        </div>

    </div>



</div>
<div className="proceed">
    <div className="d-flex justify-content-between mb-4 pt-2 px-2">
        <div className="subtotal">
            <h4>Subtotal</h4>
            <h5>Extra charges may apply</h5>
        </div>
        <div className="price-2 my-auto">
            <h5>₹200</h5>
        </div>
    </div>
    <div className="checkout-btn">
        <Link className="pay" to="">Proceed To Pay <i className="fa-solid fa-right-long"></i></Link>
    </div>
</div>
{/* <!-- <div className="cart-box">
    <div className="cart-img">
        <img src="assets/Images/empty-cart.png" alt=""/>
    </div>
    <div className="cart-text">
        <p>Your cart is empty
            Add items to get started</p>
    </div>
</div> --> */}
{/* </div> */}
    </>
  )
}

export default Add_cart