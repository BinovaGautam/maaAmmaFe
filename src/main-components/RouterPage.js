import React from 'react';
import Home from '../page-components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Restaurants from '../page-components/Restaurants';
import Restaurants_2 from '../page-components/Restaurants_2';
import Earn from '../page-components/Earn';
import Vendor_Signin from '../page-components/Vendor_Signin';



export default function RouterPage() {
  return (
    <>

      <Router>
            <Routes>
                <Route path='/' exact element={<Home/>}></Route>

                <Route path='/restaurants' exact element={<Restaurants/>}></Route>
                <Route path='/restaurants-2' exact element={<Restaurants_2/>}></Route>
                <Route path='/earn' exact element={<Earn/>}></Route>
                <Route path='/vendor-signin' exact element={<Vendor_Signin/>}></Route>
                
                </Routes>
        </Router>
     {/* <Home/> */}
    </>
  )
}
