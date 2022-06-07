import React from 'react';

const Earn_banner = () => {
  return (
    <>
    
	<section className="padd-3">
		<div className="earn-bg py-90">
			<div className="container">
				<div className="earn">

				<div className="earn-heading">
					<h1>Earn money doing what you love</h1>
					
				</div>
				<div className="earn-desc">
					<p>Sign up to be your own boss and cook whenever you want.</p>
				</div>
				<div className="earn-form">
					<form action="">
						<div className="row">
							<div className="col-md-6">
								<div className="mb-3">

									<input placeholder="First name" type="text" name="first_name" className="modal-input"/>
									
								</div>
							</div>

							<div className="col-md-6">
								<div className="mb-3">

									<input placeholder="Last Name" type="text" name="last_name" className="modal-input"/>
									
								</div>
							</div>
							<div className="col-md-6">
								<div className="mb-3">

									<input placeholder="Email ID" type="email" name="email" className="modal-input"/>
									
								</div>
							</div>
							<div className="col-md-6">
								<div className="mb-3">

									<input placeholder="Password" type="password" name="password" className="modal-input"/>
									
								</div>
							</div>
							<div className="col-md-6">
								<div className="mb-3">

									<input placeholder="Phone no." type="number" name="phone" className="modal-input"/>
									
								</div>
							</div>
							<div className="col-md-6">
								<div className="mb-3">

									<input placeholder="Zip Code" type="number" name="zip_code" className="modal-input"/>
									
								</div>
							</div>
							<div className="col-md-12">
								<div className="mb-3">

									<input placeholder="Enter your address" type="text" name="address" className="modal-input"/>
									
								</div>
							</div>
							<div className="col-md-12">
								<div className="mb-3">
									<div className="rel-inp">
										<input placeholder="Upload your ID proof" type="number" name="otp"
											className="modal-input rel-input"/>
										<span className="counter2"><button className="upload">Upload</button></span>
									</div>

									
								</div>
							</div>
							<div className="col-md-12">
								<div className="mb-3 form-check">
									<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
									<label className="form-check-label check-label" for="exampleCheck1">I agree to Shef's Terms of Service &amp; Privacy Policy.</label>
								  </div>
							</div>
						</div>
						<div className="mb-3 pe-2 text-center">
							<button type="submit" className="w-100 otp-btn2 common-btn">Submit</button>
						</div>
						
					</form>
				</div>
			</div>
			</div>
		</div>
	</section>

    </>
  )
}

export default Earn_banner