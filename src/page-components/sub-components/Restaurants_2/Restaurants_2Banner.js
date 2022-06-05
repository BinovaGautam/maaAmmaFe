import React from 'react';
import { Link } from 'react-router-dom';

const Restaurants_2Banner = () => {
  return (
    <>
    <div className='sky-light-bg'>
    <section className="banner">
		<div className="container padd-3">
			<div className="above-links">
				<span><Link className="ab-link" to="/">Home /</Link>&nbsp;</span>
				<span><Link className="ab-link" to=""> Mumbai /</Link>&nbsp;</span>
				<span><Link className="ab-link" to=""> Chembur /</Link>&nbsp;</span>
				<span> Annapurna's Kitchen </span>
			</div>

		</div>
		<div className="banner-bg2">
			<img className="big-banner" src="assets/Images/banner-dish2.jpg" alt=""/>

			<div className="fav-btnbx ">
				<button className="fav-btn"><i className="fa-regular fa-heart"></i></button>

				<button className="fav-btn"><img width="18px" src="assets/Images/share.png" alt=""/></button>
			</div>


			
		</div>
	</section>
    </div>
    </>
  )
}

export default Restaurants_2Banner