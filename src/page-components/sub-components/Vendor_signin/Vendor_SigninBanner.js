import React from 'react';

const Vendor_SigninBanner = () => {
  return (
    <>
    <section className="welcome-banner padd-3">
		<div className="row">
			<div className="col-lg-7 order-lg-1 order-2">
				<div className="welcome-box py-130">
					<div className="welcome-heading">
						<h1>Welcome Back!</h1>
					</div>
					<div className="wlcm-btns text-center">
						<div className="wlcm-lg-btn mb-3">
							<button className="facebook-btn w-100 common-btn"><i className="fa-brands fa-facebook"></i> Sign in with
								Facebook</button>
						</div>
						<div className="wlcm-lg-btn">
							<button className="google-btn w-100 common-btn"><i className="fa-brands fa-google"></i> Sign in with Google</button>
						</div>
						<div className="or">
							<div className="or-line">
							<span className="or-span">
								OR
							</span>
						</div>
						</div>
						<form action="">
							<div className="mb-3">
								
								<input placeholder="Phone no." type="number" name="number" className="modal-input"/>
								
							</div>
							<div className="mb-3">
								<div className="rel-inp">
								<input placeholder="Enter 6 digit OTP" type="number" name="otp" className="modal-input rel-input"/>
								<span className="counter">00:60</span>
							</div>
								
								<div className="resend my-2 text-end"><a className="red-link" href="">Resend OTP</a></div>
							</div>
							<div className="mb-3 pe-2 text-center">
								<button type="submit" className="w-100 otp-btn common-btn">Sign In</button>
							</div>
							<div className="form-text text-center px-3 mb-3">By clicking Log in, Sign in with Facebook or
								Sign in with Google you agree to Maa Amma's <a className="red-link" href=""> Terms of Service</a> and
								<a className="red-link" href=""> Privacy Policy</a></div>
							{/* <!-- <div className="create-ac">Not registered? Create an account</div> --> */}
							<div className="create-ac text-center">

								<span>Not registered? <a className="red-link" href=""> Create an account</a></span>

							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="col-lg-5 order-lg-2 order-1">
				<div className="bg-dish d-flex align-items-center">
<div className="bg-dish-img">
	<img  src="assets/Images/g12.png" alt=""/>
</div>
			</div>
		</div>
		</div>
	</section>
    </>
  )
}

export default Vendor_SigninBanner