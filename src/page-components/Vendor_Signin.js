import React from 'react';
import Header from '../main-components/Header';
import Vendor_SigninBanner from './sub-components/Vendor_signin/Vendor_SigninBanner';

const Vendor_Signin = () => {
  return (
    <>
    <header className="header header-2 header-3">
    <Header/>    
    </header>
    <Vendor_SigninBanner/>
    </>
  )
}

export default Vendor_Signin;