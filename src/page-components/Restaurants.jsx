import React from 'react';
import Restaurants_banner from './sub-components/Restaurants/Restaurants_banner';

import Restaurants_main from './sub-components/Restaurants/Restaurants_main';
import Footer from '../main-components/Footer';
import Header from '../main-components/Header';
import Signin from './Authentication/Signin';


const Restaurants = () => {
  return (
    <>
    <header className="header header-2 header-3">
<Header/>
    </header>
    <Restaurants_banner/>
    
    <Restaurants_main/>
  
    <Footer/>
    <Signin/>
    </>
  )
}

export default Restaurants