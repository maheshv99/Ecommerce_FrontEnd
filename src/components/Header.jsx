import React from 'react'
import "../index.css"
import profile from "../datas/headericons/profile.svg"
import cart from "../datas/headericons/cart.png"
import MainNav from "./MainNav"

const Header = () => {
  return (
    <>
    <div>
        <div className='header'>
            <span className='headroute'>
                <img className='imgicon' src={profile} alt=" " />&nbsp;
                <span >My Profile</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img className='imgicon' src={cart} alt=" " />&nbsp;
                <span >Cart</span>&nbsp;
            </span>
            <h2 className='text-center pt-3 fw-bold' style={{color:"red"}}>iShop</h2>
            <MainNav/>
        </div>
        
    </div>
    </>
  )
}

export default Header