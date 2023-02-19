import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Ipad from '../pages/Ipad';
import Iphone from '../pages/Iphone';
import Macbook from '../pages/Macbook';
import Accesories from '../pages/Accesories';

const Routes11 = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/ipad' element={<Ipad/>} />
                <Route path='/macbook' element={<Macbook/>} />
                <Route path='/iphone' element={<Iphone/>} />
                <Route path='/accesories' element={<Accesories/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routes11