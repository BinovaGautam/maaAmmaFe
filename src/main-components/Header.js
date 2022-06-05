import React from 'react';

import { NavLink, Link } from 'react-router-dom';
// import Signin from '../page-components/Authentication/Signin';
export default function Header() {
  return (
    <>
    
		<div className="container">
			<div className="header-main  d-lg-flex flex-lg-row">
				<div className="uk-logo logo">
                    <Link to="/">
					<img src="assets/Images/logo.png" width="94px" alt=""/>
                    </Link>
				</div>
				<div className="open-nav-menu">
					<span></span>
				</div>
				<div className="menu-overlay">
				</div>
				{/* <!-- navigation menu start --> */}
				<nav className="nav-menu uk-navbar-right">
					{/* <NavLink className="close-nav-menu navbar-brand ">
						<i className="fas fa-times"></i>
					</NavLink> */}




					<ul className="menu mb-0 d-lg-flex justify-content-center" >
						<span className="aut mx-auto">
                        {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> */}
						 {/* <li className="nav-item">
							<NavLink className="nav-link"  activeClassName="active" aria-current="page" to="/">Home</NavLink>
						</li>  */}
							<li className="menu-item">
								<NavLink className="nav-link1 active"   to="/">Home</NavLink>
							</li>
							<li className="menu-item">
								<NavLink className="nav-link1"  to="/product-listing">Categories</NavLink>
							</li>
							<li className="menu-item">
								<NavLink className="nav-link1"  to="/recipes">Recipes</NavLink>
							</li>
							<li className="menu-item">
								<NavLink className="nav-link1"  to="/about">About Us</NavLink>
							</li>
						</span>


						{/* <!-- <li className="menu-item menu-item-has-children">
							<NavLink to="#" data-toggle="sub-menu">Entsorgung </NavLink>
							<ul className="sub-menu">
								<li className="menu-item "><NavLink to=""
										title="Wir entsorgen Ihren Sperrmüll schnell und unkompliziert">
										Sperrmüllentsorgung</NavLink></li>
								<li className="menu-item "><NavLink to="" title="Wir entrümpeln Betten, Schränke, Regale uvm.">
										Möbelentsorgung</NavLink></li>
								<li className="menu-item "><NavLink to="" title="Waschmaschinenentsorgung schnell und günstig">
										Waschmaschinenentsorgung</NavLink></li>
								<li className="menu-item "><NavLink to=""
										title="Umweltgerechte Entsorgung von Gefrier- und Kühlschränken">
										Kühlschrankentsorgung</NavLink></li>
							</ul>


						</li> --> */}

						<span className="mr-aut d-flex align-items-center">
							<li className="menu-item new-main">



								<NavLink to=""><img width="20px" height="20px" src="assets/Images/search.svg" alt=""/></NavLink>

							</li>

							<li className="menu-item new-main">



								<NavLink to=""><img width="20px" height="20px" src="assets/Images/cart.svg" alt=""/></NavLink>

							</li>

							<li className="menu-item btncls">


								<button to="/anfrage/" title="" className="uk-button uk-button-primary modal-link"  data-bs-toggle="modal" data-bs-target="#exampleModal1" >Sign In</button>

							</li>
						</span>
					</ul>

				</nav>
				{/* <!-- navigation menu end --> */}
			</div>
		</div>
	
	
    </>
  )
}
