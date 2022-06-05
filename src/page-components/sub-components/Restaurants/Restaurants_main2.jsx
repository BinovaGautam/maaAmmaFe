import React from 'react';
import ButtonAddRemoveItem from '../Extras/ButtonAddRemoveItem';

const Restaurants_main2 = () => {
    
  return (
    <>


    <div className="item-box">
								<div className="row">
									<div className="col-9">
										<div className="item-txt p-2 my-auto">
											<h6>Fresh Cream Mango Pastry [1 Piece]</h6>
											<span><span className="rs">₹</span>200</span>
											<p>Moist vanilla sponge layered with fresh cream, juicy mango chunks.</p>
										</div>
									</div>
									<div className="col-3 p-0 pos-rel">
										<div className="item-img ms-auto ">
											<img src="assets/Images/cake-item.png" alt=""/>

											
										</div>
										<div className="add-btn">
                                            <ButtonAddRemoveItem />
											{/* <button>Add</button> */}
										</div>
									</div>
								</div>



							</div>
    </>
  )
}

export default Restaurants_main2