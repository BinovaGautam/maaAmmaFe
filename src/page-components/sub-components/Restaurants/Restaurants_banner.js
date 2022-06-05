import React from 'react';
import { Link } from 'react-router-dom';

const Restaurants_banner = () => {
  return (
    <>
    <div className='sky-light-bg'>
    <section className="banner">
		<div className="container padd-3">
			<div className="above-links">
				<span><Link className="ab-link" to="/">Home /</Link>&nbsp;</span>
				<span><Link className="ab-link" to="">Mumbai /</Link>&nbsp;</span>
				<span><Link className="ab-link" to="">Chembur /</Link>&nbsp;</span>
				<span>Gopala's Veg Kitchen </span>
			</div>

		</div>
		<div className="banner-bg py-52">
			<div className="container">
				<div className="row">
					<div className="col-lg-2 col-md-3">
						<div className="banner-main-img">
							<img src="assets/Images/banner-dish.png" alt=""/>
						</div>
					</div>
					<div className="col-lg-7 col-md-6">

						<div className="banner-text">
							<h2>Gopala's Veg Kitchen</h2>
							<p>Homemade, Indian</p>
							<p>R Odeon Mall, Ghatkopar East, Mumbai</p>
							<p><span>Open now </span>- 11:30am-11pm (Today)</p>
						</div>

					</div>
					<div className="col-md-3 col-lg-3">
						<div className="banner-discount">
							{/* <!-- <div className="discount-bx1"> --> */}
							<div className="row discount-bx1">
								<div className="col-8 p-0 my-auto">
									<div className="disc-desc">
										<p>Enjoy the special offers upto 40% on fresh homefood</p>
									</div>

								</div>
								<div className="col-4 p-0">
									<div className="disc-img">
										<img src="assets/Images/discount1.png" alt=""/>

										<div className="disc-perc">
											<span className="disc-num">
												40
											</span>
											<span className="disc-num1">
												<span className="span-1">
													%
												</span>
												<span className="span-2">
													off
												</span>
											</span>
										</div>

									</div>
								</div>


								{/* <!-- </div> --> */}
							</div>
							<div className="row discount-bx1">
								<div className="col-8 p-0 my-auto">
									<div className="disc-desc">
										<p>Enjoy the special offers upto 20% on fresh homefood</p>
									</div>

								</div>
								<div className="col-4 p-0">
									<div className="disc-img">
										<img src="assets/Images/discount2.png" alt=""/>

										<div className="disc-perc">
											<span className="disc-num">
												20
											</span>
											<span className="disc-num1">
												<span className="span-1">
													%
												</span>
												<span className="span-2">
													off
												</span>
											</span>
										</div>

									</div>
								</div>


								{/* <!-- </div> --> */}
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>
    </div>
    </>
  )
}

export default Restaurants_banner