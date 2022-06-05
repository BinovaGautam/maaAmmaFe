import React from 'react'

const Signin = () => {
  return (
    <>
    <div className="modal modal1 fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel"
		aria-hidden="true">
		<div className="modal-dialog  modal-xl">
			<div className="modal-content">
				<div className="modal-header">

					<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
						<i className="fas close fa-times"></i>
						
						
					</button>
				</div>

				<div className="modal-body">
					<div className="container">
						<div className="row">
							<div className="col-lg-4"></div>
							<div className="col-lg-4 fltt">
								<div className="login-head ps-3">
									<h3>Sign In</h3>
									<span>or <a href="">create an account</a></span>
									<div className="line-divider"></div>
								</div>
								
									<form action="">
										<div className="mb-3">
											<label  className="form-label ps-3">Email</label>
											<input placeholder="Enter Email Address" type="email" name="email" className="modal-input"/>
											
										  </div>
										<div className="mb-3">
											<label  className="form-label ps-3">Password</label>
											<input placeholder="Enter Password" type="password" name="password" className="modal-input"/>
										  </div>
										<div className="mb-1 pe-2">
										<button type="submit" className="subscribe-btn w-100">Sign In</button>
									</div>
										<div id="emailHelp" className="form-text ps-3 mb-3">By clicking on Signin, I accept the Terms &amp; Conditions &amp; Privacy Policy</div>
									</form>
								
								
							</div>
							<div className="col-lg-4"></div>



						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default Signin