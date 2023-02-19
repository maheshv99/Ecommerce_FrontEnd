import React,{useState} from 'react';
import "../index.css";
import {Link} from 'react-router-dom'

const MainNav = () => {

  const [show,setShow]=useState("showlist")
const Showlist=()=>{
  setShow("showlist1")
}

const Showlist1=()=>{
  setShow("showlist")
}

  return (
    <>
    <div style={{margin:"0 20%"}} className="mb=5">
    <div className='headerlink text-center'>
        <Link className='text-decoration-none text-dark' to="/" onClick={Showlist1}>HOME</Link>
        <Link className='text-decoration-none text-dark' to="" onMouseOver={Showlist} >STORE</Link>
        <Link className='text-decoration-none text-dark' to="/iphone" onClick={Showlist1}>IPHONE</Link>
        <Link className='text-decoration-none text-dark' to="/ipad" onClick={Showlist1}>IPAD</Link>
        <Link className='text-decoration-none text-dark' to="/macbook" onClick={Showlist1}>MACBOOK</Link>
        <Link className='text-decoration-none text-dark' to="/accesories" onClick={Showlist1}>ACCESORIES</Link>
    </div>
    </div>
    <div id={show} className='showlist'>
      <div style={{display:"inline-block",padding:"20px",lineHeight:'30px' }}>
        <h4 style={{color:"rgb(120, 120, 120)"}}> Accesories</h4>
        <span style={{padding:"5px"}}> AirPort & Wireless</span><br/>
        <span style={{padding:"5px"}}> AppleCare</span><br/>
        <span style={{padding:"5px"}}> Bags,shells & Sleeves</span><br/>
        <span style={{padding:"5px"}}> Business & Security</span><br/>
        <span style={{padding:"5px"}}> Cabies & Docks</span><br/>

      </div>

      <div style={{display:"inline-block",padding:"20px",lineHeight:'30px' }}>
        <h5 style={{color:"rgb(190, 190, 190)"}}>  </h5>
        <span style={{padding:"5px"}}> Cameras & Video</span><br/>
        <span style={{padding:"5px"}}> Car & Travel</span><br/>
        <span style={{padding:"5px"}}> Cases & Films</span><br/>
        <span style={{padding:"5px"}}> </span><br/>
        <span style={{padding:"5px"}}> </span><br/>
        <span style={{padding:"5px"}}> </span><br/>
      </div>

      <div style={{display:"inline-block",padding:"20px",lineHeight:'30px' }}>
        <h4 style={{color:"rgb(120, 120, 120)"}}> Category</h4>
        <span style={{padding:"5px"}}> Charging Device</span><br/>
        <span style={{padding:"5px"}}> Connected Home</span><br/>
        <span style={{padding:"5px"}}> Device Care</span><br/>
        <span style={{padding:"5px"}}> Display & Graphic</span><br/>
        <span style={{padding:"5px"}}> Fitness & Sport</span><br/>
       
      </div>

   
    </div>
    </>
  )
}

export default MainNav