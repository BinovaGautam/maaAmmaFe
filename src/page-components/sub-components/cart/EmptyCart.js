import React from 'react'

const EmptyCart = () => {
    return (
        <>
        {/* <div className="cart sticky"> */}
            <div className="cart-box">
                <div className="cart-img">
                    <img src="assets/Images/empty-cart.png" alt="" />
                </div>
                <div className="cart-text">
                    <p>Your cart is empty
                        Add items to get started</p>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default EmptyCart