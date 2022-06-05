import React from 'react';
import Footer from '../main-components/Footer';
import Header from '../main-components/Header';
import Signin from './Authentication/Signin';
import Hero from './sub-components/home/Hero';
import Home_main from './sub-components/home/Home_main';

export default function Home() {
  return (
    <>
    
    <header className="header header-2">
    <Header/>
    </header>
    <Hero/>
    
    <Home_main/>
    <Footer/>
    <Signin/>
    </>
  )
}
