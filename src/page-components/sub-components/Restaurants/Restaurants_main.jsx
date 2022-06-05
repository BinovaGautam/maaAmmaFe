import React from 'react'
// import Cart from '../../Cart';
import Add_cart from '../cart/Add_cart';
// import EmptyCart from '../cart/EmptyCart';

import Restaurants_main2 from './Restaurants_main2';

const Restaurants_main = () => {
  return (
    <>
    <div className='sky-light-bg'>
    <section className="page-main">
		
		<div className="container ">
			<div className="row py-25">
				<div className="col-3">
					<div className="recom">
						<h4>
							Recommended
						</h4>
					</div>

				</div>
				<div className="col-9">
					<div className="d-flex flex-row">
						<div className="search-box2">
							<form action="">
								<button className="search-2"><img width="20px" src="assets/Images/search.svg" alt=""/></button>
								<input type="text" placeholder="Search for Dishes" className="search-input"/>
								{/* <!-- <button className="search"><img width="20px" height="20px" src="assets/Images/search-white.png"
									alt=""/></button> --> */}
							</form>
						</div>

						<div className="favorite-btn">
							<button className="favorite"><img width="16px" src="assets/Images/heart-black.png" alt=""/> Favorite</button>
						</div>
						<div className="share-btn">
							<button className="share"><img width="16px" src="assets/Images/share.png" alt=""/> Share</button>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-3 nav-animated mb-50">
					<div className="list-group sticky" id="list-tab" role="tablist">
						<a className="list-group-item list-group-item-action active" id="list-home-list"
							data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Mango
							special</a>
						<a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"
							href="#list-profile" role="tab" aria-controls="list-profile">Paneer Kopta</a>
						<a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list"
							href="#list-messages" role="tab" aria-controls="list-messages">Paneer Tikka masala</a>
						<a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list"
							href="#list-settings" role="tab" aria-controls="list-settings">Solkadhi</a>
						<a className="list-group-item list-group-item-action" id="list-rice-list" data-bs-toggle="list"
							href="#list-rice" role="tab" aria-controls="list-rice">Paneer Kopta</a>
						<a className="list-group-item list-group-item-action" id="list-masala-list" data-bs-toggle="list"
							href="#list-masala" role="tab" aria-controls="list-masala">Paneer Tikka masala</a>
						<a className="list-group-item list-group-item-action" id="list-veg-list" data-bs-toggle="list"
							href="#list-veg" role="tab" aria-controls="list-veg">Solkadhi</a>
							<div className="div" id="marker">

							</div>
					</div>
				</div>
				<div className="col-lg-6 mb-50">
					<div className="tab-content" id="nav-tabContent">

						{/* <!-- mango special --> */}
						<div className="tab-pane fade show active" id="list-home" role="tabpanel"
							aria-labelledby="list-home-list">
							<div className="recom">
								<h4>
									Mango Specials <span>(7 Items)</span>
								</h4>
							</div>
                           <Restaurants_main2/>
							

							

							{/* <!-- <div className="item-box">

							</div> --> */}
						</div>

						{/* <!-- ,amgo special ends --> */}

						{/* <!-- Paneer Kopta starts --> */}
						<div className="tab-pane fade" id="list-profile" role="tabpanel"
							aria-labelledby="list-profile-list">
							<div className="recom">
								<h4>
									Paneer Kopta <span>(4 Items)</span>
								</h4>
							</div>
							
							<Restaurants_main2/>
							
						
						</div>

						{/* <!-- Paneer Kopta ends -->	 */}
						<div className="tab-pane fade" id="list-messages" role="tabpanel"
							aria-labelledby="list-messages-list">
							<div className="recom">
								<h4>
									Paneer Tikka Masala <span>(10 Items)</span>
								</h4>
							</div>
							<Restaurants_main2/>
						</div>
						<div className="tab-pane fade" id="list-settings" role="tabpanel"
							aria-labelledby="list-settings-list">4</div>
						<div className="tab-pane fade" id="list-rice" role="tabpanel" aria-labelledby="list-rice-list">5
						</div>
						<div className="tab-pane fade" id="list-masala" role="tabpanel" aria-labelledby="list-masala-list">6
						</div>
						<div className="tab-pane fade" id="list-veg" role="tabpanel" aria-labelledby="list-veg-list">7</div>
					</div>
				</div>
				<div className="col-lg-3 mb-50">
				<div className="cart sticky"> 
						{/* <EmptyCart/> */}
						<Add_cart/>
						</div>
				</div>
			</div>
		</div>
	</section>
    </div>
    </>
  )
}

export default Restaurants_main;