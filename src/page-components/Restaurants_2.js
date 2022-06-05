import React from 'react';
import Footer from '../main-components/Footer';
import Header from '../main-components/Header';
import Signin from './Authentication/Signin';
import Restaurants_2Banner from './sub-components/Restaurants_2/Restaurants_2Banner';
import Restaurants_2Page from './sub-components/Restaurants_2/Restaurants_2Page';


const Restaurants_2 = () => {
  return (
    <>
    <header className="header header-2 header-3">
    <Header/>
    </header>
<Restaurants_2Banner/>
<Restaurants_2Page/>
<Footer/>
    <Signin/>
    </>
  )
}

export default Restaurants_2