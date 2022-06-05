import React from 'react';
import { Link } from 'react-router-dom';




const Home_main = () => {
  return (
	<>
	<section>


	</section>
	{/* <!-- Homecooked section starts --> */}
<section className="homecooked">
	<div className="container">


		<div className="main-title text-center mb-60">
			<h2><span className="dark-col">EXPERIENCE </span><span className="orange-col underline-aft">Homecooked
					Food</span><span className="dark-col"> Near You</span>
			</h2>
		</div>
		<div className="d-flex justify-content-center">
			<div className="tab-sec">
				<div className="nav nav-tabs mx-auto" id="nav-tab" role="tablist">
					<button className="nav-lin active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#home"
						type="button" role="tab" aria-controls="nav-home" aria-selected="true">Pickup your
						Food</button>
					<button className="nav-lin" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
						type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Get
						Delivery</button>

					{/* <!-- <div className="animation start-home" id="marker"></div> --> */}
				</div>
			</div>
		</div>
		<div className="tab-content" id="myTabContent">
			<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
				<div className="line-sec">
					<div className="line-bg text-center">
						<img className="line1" src="assets/Images/wave.png" alt=""/>
						<div className="position-1">
							<div className="eye">
								<img src="assets/Images/view.png" alt=""/>

							</div>
							<p>View Food</p>
						</div>
						<div className="position-2">
							<div className="eye2">
								<img src="assets/Images/clean-hand.png" alt=""/>
							</div>
							<p>Clean &amp; Sanitised Kitchen</p>
						</div>
						<div className="position-3">
							<div className="eye">
								<img src="assets/Images/kitchen.png" alt=""/>

							</div>
							<p>Select your Kitchen</p>
						</div>
						<div className="position-4">
							<div className="eye2">
								<img src="assets/Images/online-order.png" alt=""/>
							</div>
							<p>Order your food</p>
						</div>
						<div className="position-5">
							<div className="eye">
								<img src="assets/Images/payment.png" alt=""/>

							</div>
							<p>Pay when Pickup</p>
						</div>
						<div className="position-6">
							<div className="eye2">
								<img src="assets/Images/restaurant.png" alt=""/>
							</div>
							<p>Pickup your Food</p>
						</div>

					</div>

				</div>
			</div>
			<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Empty
			</div>


		</div>
	</div>
</section>
{/* <!-- Homecooked section ends --> */}

<section className="map-sec mb-70">

<div className="map-arrow">
<img src="assets/Images/Arrow-2.png" alt=""/>
</div>
	<div className="main-title text-center  mb-60">
		<h2><span className="dark-col">Explore </span><span className="orange-col underline-aft">Maa Amma’s Food
			</span><span className="dark-col"> in your area</span>
		</h2>
	</div>
	<div className="row mb-5">
		<div className="col-lg-6 map">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52116.73736322952!2d73.06477146571437!3d19.209352433826012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7958ef72d8707%3A0x84bf6ab96e280b08!2sDombivli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1653725708607!5m2!1sen!2sin"
				width="100%" style={{border:"0"}} allowfullscreen="" loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
		<div className="col-lg-6">
			<div className="ps-50">
				<div className="tab-sec-2">
					<div className="nav nav-tabs mx-auto mb-4" id="nav-tab" role="tablist">
						<button className="nav-lin active" id="nav-home-tab" data-bs-toggle="tab"
							data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
							aria-selected="true">All</button>
						<button className="nav-lin" id="profile-tab0" data-bs-toggle="tab" data-bs-target="#profile1"
							type="button" role="tab" aria-controls="profile2" aria-selected="false">Near
							You</button>
						<button className="nav-lin" id="profile-tab1" data-bs-toggle="tab" data-bs-target="#profile2"
							type="button" role="tab" aria-controls="profile2" aria-selected="false">Best
							Kitchen</button>
						<button className="nav-lin" id="profile-tab2" data-bs-toggle="tab" data-bs-target="#profile3"
							type="button" role="tab" aria-controls="profile3" aria-selected="false">Best
							Dishes</button>

						{/* <!-- <div className="animation start-home" id="marker"></div> --> */}
					</div>
					<div className="tab-content" id="myTabContent">
						<div className="tab-pane fade show active" id="nav-home" role="tabpanel"
							aria-labelledby="nav-home-tab">
								<Link className='restaurant-link' to="/restaurants">
							<div className="kitchen-box">
								<div className="kitchen-box-inside  d-flex flex-row">
									<div className="in-img d-flex align-items-center">
										<div className="kitchen-img">
											<img src="assets/Images/circle-img.png" alt=""/>
										</div>
									</div>
									<div className="d-flex align-items-center">
										<div className="kitchen-txt ">
											<h5>Purnabramha Kitchen</h5>
											<p className="mb-0">200m-Near star colony,Manpada Rd, Dombivli,421202</p>

										</div>
									</div>
								</div>
								<span className="ratings2">
									{/* <!-- <div className="star"> --> */}
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid fa-star"></i>
									{/* <!-- </div> --> */}
								</span>
							</div>
							</Link>
							<Link className='restaurant-link' to="/restaurants-2">
							<div className="kitchen-box">
								<div className="kitchen-box-inside  d-flex flex-row">
									<div className="in-img d-flex align-items-center">
										<div className="kitchen-img">
											<img src="assets/Images/circle-img2.png" alt=""/>
										</div>
									</div>
									<div className="d-flex align-items-center">
										<div className="kitchen-txt ">
											<h5>Annapurna Kitchen</h5>
											<p className="mb-0">200m-Near star colony,Manpada Rd, Dombivli,421202</p>

										</div>
									</div>
								</div>
								
								<span className="ratings2">
									{/* <!-- <div className="star"> --> */}
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid fa-star"></i>
									{/* <!-- </div> --> */}
								</span>
							</div>
							</Link>
							<div className="kitchen-box">
								<div className="kitchen-box-inside  d-flex flex-row">
									<div className="in-img d-flex align-items-center">
										<div className="kitchen-img">
											<img src="assets/Images/circle-img3.png" alt=""/>
										</div>
									</div>
									<div className="d-flex align-items-center">
										<div className="kitchen-txt ">
											<h5>Kailash Kitchens</h5>
											<p className="mb-0">200m-Near star colony,Manpada Rd, Dombivli,421202</p>

										</div>
									</div>
								</div>
								<span className="ratings2">
									{/* <!-- <div className="star"> --> */}
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid fa-star"></i>
									{/* <!-- </div> --> */}
								</span>
							</div>
						</div>
						<div className="tab-pane fade" id="profile1" role="tabpanel" aria-labelledby="profile-tab0">
							<div className="kitchen-box">
								<div className="kitchen-box-inside  d-flex flex-row">
									<div className="in-img d-flex align-items-center">
										<div className="kitchen-img">
											<img src="assets/Images/circle-img2.png" alt=""/>
										</div>
									</div>
									<div className="d-flex align-items-center">
										<div className="kitchen-txt ">
											<h5>Annapurna Kitchen</h5>
											<p className="mb-0">200m-Near star colony,Manpada Rd, Dombivli,421202</p>

										</div>
									</div>
								</div>
								<span className="ratings2">
									{/* <!-- <div className="star"> --> */}
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid fa-star"></i>
									{/* <!-- </div> --> */}
								</span>
							</div>
							<div className="kitchen-box">
								<div className="kitchen-box-inside  d-flex flex-row">
									<div className="in-img d-flex align-items-center">
										<div className="kitchen-img">
											<img src="assets/Images/circle-img.png" alt=""/>
										</div>
									</div>
									<div className="d-flex align-items-center">
										<div className="kitchen-txt ">
											<h5>Purnabramha Kitchen</h5>
											<p className="mb-0">200m-Near star colony,Manpada Rd, Dombivli,421202</p>

										</div>
									</div>
								</div>
								<span className="ratings2">
									{/* <!-- <div className="star"> --> */}
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid fa-star"></i>
									{/* <!-- </div> --> */}
								</span>
							</div>

							<div className="kitchen-box">
								<div className="kitchen-box-inside  d-flex flex-row">
									<div className="in-img d-flex align-items-center">
										<div className="kitchen-img">
											<img src="assets/Images/circle-img3.png" alt=""/>
										</div>
									</div>
									<div className="d-flex align-items-center">
										<div className="kitchen-txt ">
											<h5>Kailash Kitchens</h5>
											<p className="mb-0">200m-Near star colony,Manpada Rd, Dombivli,421202</p>

										</div>
									</div>
								</div>
								<span className="ratings2">
									{/* <!-- <div className="star"> --> */}
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid fa-star"></i>
									{/* <!-- </div> --> */}
								</span>
							</div>
						</div>
						<div className="tab-pane fade" id="profile2" role="tabpanel" aria-labelledby="profile-tab1">
							<div className="kitchen-box">
								<div className="kitchen-box-inside  d-flex flex-row">
									<div className="in-img d-flex align-items-center">
										<div className="kitchen-img">
											<img src="assets/Images/circle-img2.png" alt=""/>
										</div>
									</div>
									<div className="d-flex align-items-center">
										<div className="kitchen-txt ">
											<h5>Annapurna Kitchen</h5>
											<p className="mb-0">200m-Near star colony,Manpada Rd, Dombivli,421202</p>

										</div>
									</div>
								</div>
								<span className="ratings2">
									{/* <!-- <div className="star"> --> */}
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid fa-star"></i>
									{/* <!-- </div> --> */}
								</span>
							</div>
						</div>
						<div className="tab-pane fade" id="profile3" role="tabpanel" aria-labelledby="profile-tab2">
							<div className="kitchen-box">
								<div className="kitchen-box-inside  d-flex flex-row">
									<div className="in-img d-flex align-items-center">
										<div className="kitchen-img">
											<img src="assets/Images/circle-img2.png" alt=""/>
										</div>
									</div>
									<div className="d-flex align-items-center">
										<div className="kitchen-txt ">
											<h5>Annapurna Kitchen</h5>
											<p className="mb-0">200m-Near star colony,Manpada Rd, Dombivli,421202</p>

										</div>
									</div>
								</div>
								<span className="ratings2">
									{/* <!-- <div className="star"> --> */}
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid fa-star"></i>
									{/* <!-- </div> --> */}
								</span>
							</div>
							<div className="kitchen-box">
								<div className="kitchen-box-inside  d-flex flex-row">
									<div className="in-img d-flex align-items-center">
										<div className="kitchen-img">
											<img src="assets/Images/circle-img2.png" alt=""/>
										</div>
									</div>
									<div className="d-flex align-items-center">
										<div className="kitchen-txt ">
											<h5>Annapurna Kitchen</h5>
											<p className="mb-0">200m-Near star colony,Manpada Rd, Dombivli,421202</p>

										</div>
									</div>
								</div>
								<span className="ratings2">
								{/* <!-- <div className="star"> --> */}
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid red-col fa-star"></i>
									<i className="fa-solid fa-star"></i>
									{/* <!-- </div> --> */}
								</span>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="view-all text-center">
		<Link className="here" to="#">View all Kitchens</Link>
	</div>
</section>

{/* <!-- menu starts --> */}

<section className="menu">
	<div className="main-title text-center capitalize mb-5">
		<h2><span className="orange-col">Menu</span><span className="dark-col"> that </span><span className="lemon-col">
				 Always</span> <br/> <span className="dark-col"> make you fall in </span><span
				className="orange-col">love</span> </h2>
	</div>
	{/* <!-- <div className="container-fluid"> --> */}
	<div className="red-bg">
		<div className="onion">
			<img src="assets/Images/onion.png" alt=""/>
		</div>
		<div className="broccoli">
			<img src="assets/Images/broccoli.png" alt=""/>
		</div>
		<div className="beet">
			<img src="assets/Images/beet.png" alt=""/>
		</div>
		<div className="kiwi">
			<img src="assets/Images/kiwi.png" alt=""/>
		</div>
		<div className="ginger">
			<img src="assets/Images/ginger.png" alt=""/>
		</div>
		<div className="orange">
			<img src="assets/Images/Orange2.png" alt=""/>
		</div>
		<div className="container text-center">
			<div className="row">
				<div className="col-4 py-2 col-lg-2 bd-light">
					<div className="menu-item">
						<span>Cuisines</span>
					</div>
				</div>
				<div className="col-4 py-2 col-lg-2 bd-light">
					<div className="menu-item">
						<span>Chutneys</span>
					</div>
				</div>
				<div className="col-4 py-2 col-lg-2 bd-light">
					<div className="menu-item">
						<span>Masala</span>
					</div>
				</div>
				<div className="col-4 py-2 col-lg-2 bd-light">
					<div className="menu-item">
						<span>Podis</span>
					</div>
				</div>
				<div className="col-4 py-2 col-lg-2 bd-light">
					<div className="menu-item">
						<span>Pickles</span>
					</div>
				</div>
				<div className="col-4 py-2 col-lg-2 bd-light">
					<div className="menu-item">
						<span>Fryumes</span>
					</div>
				</div>

			</div>
			{/* <!-- </div> --> */}
		</div>
	</div>
	<div className="menu-sec pt-170">
		<div className="container">
			<div className="row mb-5">
				<div className="col-lg-3">
					<div className="for-lift">
						{/* <Link className="menu-link" to=""> */}
							<div className="menu-box">
								<div className="menu-1">
									<div className="menu-overlay">

									</div>
									<div className="menu-overlay-img">

										<img src="assets/Images/menu1.png" alt=""/>
									</div>

									<div className="menu-text">
										<h6>Mixed fruit salad</h6>
										<p>₹200.75<span className="star">

												(4.5 <i className="fa-solid fa-star"></i>)
											</span></p>
									</div>
								</div>
							</div>
						{/* </Link> */}
					</div>
				</div>
				<div className="col-lg-3">
					<div className="for-lift for-2">
						{/* <Link className="menu-link" to=""> */}
							<div className="menu-box">
								<div className="menu-1">
									<div className="menu-overlay">

									</div>
									<div className="menu-overlay-img">

										<img src="assets/Images/menu1.png" alt=""/>
									</div>

									<div className="menu-text">
										<h6>Mixed fruit salad</h6>
										<p>₹200.75<span className="star">

												(4.5 <i className="fa-solid fa-star"></i>)
											</span></p>
									</div>
								</div>
							</div>
						{/* </Link> */}
					</div>
				</div>
				<div className="col-lg-3">
					<div className="for-lift">
						{/* <Link className="menu-link" to=""> */}
							<div className="menu-box">
								<div className="menu-1">
									<div className="menu-overlay">

									</div>
									<div className="menu-overlay-img">

										<img src="assets/Images/menu1.png" alt=""/>
									</div>

									<div className="menu-text">
										<h6>Mixed fruit salad</h6>
										<p>₹200.75<span className="star">

												(4.5 <i className="fa-solid fa-star"></i>)
											</span></p>
									</div>
								</div>
							</div>
						{/* </Link> */}
					</div>
				</div>
				<div className="col-lg-3">
					<div className="for-lift for-2">
						{/* <Link className="menu-link" to=""> */}
							<div className="menu-box">
								<div className="menu-1">
									<div className="menu-overlay">

									</div>
									<div className="menu-overlay-img">

										<img src="assets/Images/menu1.png" alt=""/>
									</div>

									<div className="menu-text">
										<h6>Mixed fruit salad</h6>
										<p>₹200.75<span className="star">

												(4.5 <i className="fa-solid fa-star"></i>)
											</span></p>
									</div>
								</div>
							</div>
						{/* </Link> */}
					</div>
				</div>

			</div>
			<div className="view-all text-center">
				<Link to="">View all Menu</Link>
			</div>
		</div>

	</div>
</section>

{/* <!-- menu ends --> */}

{/* <!-- Empower section starts --> */}

<section className="empower">
	
	<div className="row">
		<div className="col-lg-5">
			<div className="box-emp">
				<div className="bg-emp">
					<img src="assets/Images/emp-bg.png" alt=""/>
				</div>
				<div className="emp-aaji2">
					<img src="assets/Images/aaji.png" alt=""/>
				</div>
				<div className="arrow-3">
					<img src="assets/Images/arrow-3.png" alt=""/>
				</div>
			</div>
			{/* <!-- <div className="emp-box">
<div className="emp-images">
	<div className="emp-bg">
		<img src="assets/Images/emp-ellipse.png" alt=""/>
	</div>
	<div className="decore">
		<img src="assets/Images/Decore.png" alt=""/>
	</div>
	<div className="emp-dishes">
		<img src="assets/Images/empower.png" alt=""/>
	</div>
	<div className="seekpng-2">
		<img src="assets/Images/SeekPng2.png" alt=""/>
	</div>
	<div className="emp-aaji">
		<img src="assets/Images/aaji.png" alt=""/>
	</div>
	
</div>
</div> --> */}
		</div>
		<div className="col-lg-7 my-auto">
			<div className="padd-2">
				<div className="main-title main-wid">
					<h2><span className="dark-col">We are </span><span className="orange-col">Empowering </span><span
							className="lemon-col">Home Kitchens</span> </h2>
				</div>
				<div className="description-para">
					<p>This is a type of resturent which typically serves food and drink, in addition to light
						refreshments such as baked goods or snacks. The term comes frome the rench word meaning food
					</p>
				</div>

				<div className="row wid-2">
					<div className="col-6">
						<div className="about-list">
							<ul>
								<li className="d-flex">
									<div className="list-img">
										<img src="assets/Images/icon1.png" alt=""/>
									</div>
									<div className="list-txt">
										<span>Online Order</span>
									</div>
								</li>
								<li className="d-flex">
									<div className="list-img">
										<img src="assets/Images/icon3.png" alt=""/>
									</div>
									<div className="list-txt">
										<span>Pre-Reservation</span>
									</div>
								</li>
								<li className="d-flex">
									<div className="list-img">
										<img src="assets/Images/icon3.png" alt=""/>
									</div>
									<div className="list-txt">
										<span>Super Chef</span>
									</div>
								</li>

							</ul>
						</div>
					</div>
					<div className="col-6">
						<div className="about-list">
							<ul>
								<li className="d-flex">
									<div className="list-img">
										<img src="assets/Images/icon2.png" alt=""/>
									</div>
									<div className="list-txt">
										<span>24/7 Service</span>
									</div>
								</li>
								<li className="d-flex">
									<div className="list-img">
										<img src="assets/Images/icon3.png" alt=""/>
									</div>
									<div className="list-txt">
										<span>Oragonized Maa Amma Kitchens</span>
									</div>
								</li>
								<li className="d-flex">
									<div className="list-img">
										<img src="assets/Images/icon1.png" alt=""/>
									</div>
									<div className="list-txt">
										<span>No Platform fee</span>
									</div>
								</li>

							</ul>
						</div>
					</div>
				</div>

				<div className="about-btn">
					<Link to="">About Us</Link>
				</div>

			</div>
		</div>
	</div>
	
</section>
{/* <!-- empower section ends --> */}

{/* <!-- Best Seller section starts --> */}
<section className="best-sell pb-80">
	<div className="map-arrow">
		<img src="assets/Images/Arrow-2.png" alt=""/>
	</div>
	<div className="container">
		<div className="main-title text-center capitalize mb-5">
			<h2><span className="orange-col">Our Bestsellers</span><span className="dark-col"> that</span><span
					className="lemon-col"> always</span> <br/> <span className="dark-col"> make you fall in </span><span
					className="orange-col">love</span> </h2>
		</div>

		<div className="cards-container">
			<div className="row">
				<div className="col-lg-3 ">
					<div className="cards-box">
						<div className="top-card mx-auto">
							<div className="top-bg">
								<img width="100%" src="assets/Images/top-card.png" alt=""/>
							</div>
							<div className="top-bg2">
								<img src="assets/Images/food_item1.png" alt=""/>
							</div>
							<div className="top-amt">
								<span>₹200</span>
							</div>
						</div>
						<div className="bottom-card text-center px-3 pb-3">
							<div className="ratings pb-3">
								<span className="profile">
									<img className="profile1" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-1">
									<img className="profile2" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-2">
									<img className="profile3" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="star">
									<i className="fa-solid fa-star"></i>
									(4.5)
								</span>
							</div>
							<div className="card-head ">
								<h5><Link to="">Mushroom Rice</Link></h5>
							</div>
							<div className="card-desc ">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
							</div>
							<div className="order-btn">
								<button>Order Now</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 ">
					<div className="cards-box">
						<div className="top-card mx-auto">
							<div className="top-bg">
								<img width="100%" src="assets/Images/top-card.png" alt=""/>
							</div>
							<div className="top-bg2">
								<img src="assets/Images/food-item2.png" alt=""/>
							</div>
							<div className="top-amt">
								<span>₹200</span>
							</div>
						</div>
						<div className="bottom-card text-center px-3 pb-3">
							<div className="ratings pb-3">
								<span className="profile">
									<img className="profile1" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-1">
									<img className="profile2" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-2">
									<img className="profile3" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="star">
									<i className="fa-solid fa-star"></i>
									(4.5)
								</span>
							</div>
							<div className="card-head ">
								<h5><Link to="">Mushroom Rice</Link></h5>
							</div>
							<div className="card-desc ">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
							</div>
							<div className="order-btn">
								<button>Order Now</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 ">
					<div className="cards-box">
						<div className="top-card mx-auto">
							<div className="top-bg">
								<img width="100%" src="assets/Images/top-card.png" alt=""/>
							</div>
							<div className="top-bg2">
								<img src="assets/Images/food-item3.png" alt=""/>
							</div>
							<div className="top-amt">
								<span>₹200</span>
							</div>
						</div>
						<div className="bottom-card text-center px-3 pb-3">
							<div className="ratings pb-3">
								<span className="profile">
									<img className="profile1" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-1">
									<img className="profile2" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-2">
									<img className="profile3" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="star">
									<i className="fa-solid fa-star"></i>
									(4.5)
								</span>
							</div>
							<div className="card-head ">
								<h5><Link to="">Mushroom Rice</Link></h5>
							</div>
							<div className="card-desc ">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
							</div>
							<div className="order-btn">
								<button>Order Now</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 ">
					<div className="cards-box">
						<div className="top-card mx-auto">
							<div className="top-bg">
								<img width="100%" src="assets/Images/top-card.png" alt=""/>
							</div>
							<div className="top-bg2">
								<img src="assets/Images/food-item4.png" alt=""/>
							</div>
							<div className="top-amt">
								<span>₹200</span>
							</div>
						</div>
						<div className="bottom-card text-center px-3 pb-3">
							<div className="ratings pb-3">
								<span className="profile">
									<img className="profile1" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-1">
									<img className="profile2" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-2">
									<img className="profile3" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="star">
									<i className="fa-solid fa-star"></i>
									(4.5)
								</span>
							</div>
							<div className="card-head ">
								<h5><Link to="">Mushroom Rice</Link></h5>
							</div>
							<div className="card-desc ">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
							</div>
							<div className="order-btn">
								<button>Order Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{/* <!-- Best Seller section ends --> */}

	{/* <!-- Middle search starts --> */}
<section className="middle-search  mb-70">
	<div className="container">
		<div className="search-cont pt-50 pb-70">
			<div className="main-title text-center capitalize ">
				<h2><span className="dark-col">Ready to order Homecooked Food?</span></h2>
				<p>Dishes worth traveling for, made just a few streets away.</p>
			</div>
			<div className="d-flex justify-content-center">
				<div className="search-box mt-4">
					<div className="location"><img width="16px" src="assets/Images/location.png" alt=""/></div>
					<input type="text" placeholder="Enter Your zip code" className="search-input"/>
					<button className="search"><img width="20px" height="20px" src="assets/Images/search-white.png"
							alt=""/></button>
				</div>
			</div>
			<div className="left-img">
				<img src="assets/Images/salad1.png" alt=""/>
			</div>
			<div className="floating-img">
				<img src="assets/Images/rucola-png.png" alt=""/>
			</div>
			<div className="right-img">
				<img src="assets/Images/Photo-plate.png" alt=""/>
			</div>
		</div>
	</div>
</section>
{/* <!-- middle search ends --> */}


{/* <!-- Featured section starts --> */}
<section className="featured py-70">
	<div className="container">
		<div className="main-title text-center capitalize mb-5">
			<h2><span className="orange-col">Our Featured</span><span className="dark-col"> that</span><span
					className="lemon-col"> always</span> <br/> <span className="dark-col"> make you fall in </span><span
					className="orange-col">love</span> </h2>
		</div>

		<div className="cards-container">
			<div className="row">
				<div className="col-lg-3 ">
					<div className="cards-box">
						<div className="top-card mx-auto">
							<div className="top-bg">
								<img width="100%" src="assets/Images/top-card.png" alt=""/>
							</div>
							<div className="top-bg2">
								<img src="assets/Images/food_item1.png" alt=""/>
							</div>
							<div className="top-amt">
								<span>₹200</span>
							</div>
						</div>
						<div className="bottom-card text-center px-3 pb-3">
							<div className="ratings pb-3">
								<span className="profile">
									<img className="profile1" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-1">
									<img className="profile2" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-2">
									<img className="profile3" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="star">
									<i className="fa-solid fa-star"></i>
									(4.5)
								</span>
							</div>
							<div className="card-head ">
								<h5><Link to="">Mushroom Rice</Link></h5>
							</div>
							<div className="card-desc ">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
							</div>
							<div className="order-btn">
								<button>Order Now</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 ">
					<div className="cards-box">
						<div className="top-card mx-auto">
							<div className="top-bg">
								<img width="100%" src="assets/Images/top-card.png" alt=""/>
							</div>
							<div className="top-bg2">
								<img src="assets/Images/food-item2.png" alt=""/>
							</div>
							<div className="top-amt">
								<span>₹200</span>
							</div>
						</div>
						<div className="bottom-card text-center px-3 pb-3">
							<div className="ratings pb-3">
								<span className="profile">
									<img className="profile1" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-1">
									<img className="profile2" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-2">
									<img className="profile3" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="star">
									<i className="fa-solid fa-star"></i>
									(4.5)
								</span>
							</div>
							<div className="card-head ">
								<h5><Link to="">Mushroom Rice</Link></h5>
							</div>
							<div className="card-desc ">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
							</div>
							<div className="order-btn">
								<button>Order Now</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 ">
					<div className="cards-box">
						<div className="top-card mx-auto">
							<div className="top-bg">
								<img width="100%" src="assets/Images/top-card.png" alt=""/>
							</div>
							<div className="top-bg2">
								<img src="assets/Images/food-item3.png" alt=""/>
							</div>
							<div className="top-amt">
								<span>₹200</span>
							</div>
						</div>
						<div className="bottom-card text-center px-3 pb-3">
							<div className="ratings pb-3">
								<span className="profile">
									<img className="profile1" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-1">
									<img className="profile2" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-2">
									<img className="profile3" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="star">
									<i className="fa-solid fa-star"></i>
									(4.5)
								</span>
							</div>
							<div className="card-head ">
								<h5><Link to="">Mushroom Rice</Link></h5>
							</div>
							<div className="card-desc ">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
							</div>
							<div className="order-btn">
								<button>Order Now</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 ">
					<div className="cards-box">
						<div className="top-card mx-auto">
							<div className="top-bg">
								<img width="100%" src="assets/Images/top-card.png" alt=""/>
							</div>
							<div className="top-bg2">
								<img src="assets/Images/food-item4.png" alt=""/>
							</div>
							<div className="top-amt">
								<span>₹200</span>
							</div>
						</div>
						<div className="bottom-card text-center px-3 pb-3">
							<div className="ratings pb-3">
								<span className="profile">
									<img className="profile1" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-1">
									<img className="profile2" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="profile-2">
									<img className="profile3" src="assets/Images/profile.png" alt=""/>
								</span>
								<span className="star">
									<i className="fa-solid fa-star"></i>
									(4.5)
								</span>
							</div>
							<div className="card-head ">
								<h5><Link to="">Mushroom Rice</Link></h5>
							</div>
							<div className="card-desc ">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
							</div>
							<div className="order-btn">
								<button>Order Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

</>
  )
}

export default Home_main;
