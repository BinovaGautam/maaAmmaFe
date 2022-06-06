import React from 'react';
import Home from '../page-components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Restaurants from '../page-components/Restaurants';
import Restaurants_2 from '../page-components/Restaurants_2';



export default function RouterPage() {
  return (
    <>

<Router>
            <Routes>
                <Route path='/' exact element={<Home/>}></Route>

                <Route path='/restaurants' exact element={<Restaurants/>}></Route>
                <Route path='/restaurants-2' exact element={<Restaurants_2/>}></Route>
                {/* <Route path='/services' exact element={<Services/>}></Route>
                <Route path='/projects' exact element={<Projects/>}></Route> */}
                </Routes>
        </Router>
     {/* <Home/> */}
    </>
  ) 
}
