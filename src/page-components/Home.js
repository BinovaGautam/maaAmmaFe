import React, {useContext} from 'react';
import Footer from '../main-components/Footer';
import Header from '../main-components/Header';
import Signin from './Authentication/Signin';
import Hero from './sub-components/home/Hero';
import Home_main from './sub-components/home/Home_main';

import { AuthContext } from '../context/AuthContext';
import Signup from './Authentication/Signup';
import AuthModal from './Authentication/AuthModal';

export default function Home() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
    
    <header className="header header-2">
    <Header/>
    </header>
    <Hero/>
    
    <Home_main/>
    <Footer/>
    {/* {!isAuthenticated && <Signin/>}
    {!isAuthenticated && <Signup/>} */}
    {!isAuthenticated && <AuthModal />}
    </>
  )
}
