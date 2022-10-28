import React from 'react'
import "./home.css"

export default function Home() {
  return (
    <>
    <div className="container">
   <div class="services-page d-flex align-items-center">
    <div className="top width">
    <h2><u>Services</u></h2>
    </div>
   </div>
   </div>
     
     
   <div className="container2 justify-contant-around ">
      <div className="row" >
      
     <div className="d-flex flex-row bd-highlight mb-4"></div>
     <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
  <div className="p-2 bd-highlight">DOMAIN BROKERAGE </div>
  </div>
  </div>

  <div className="container2 justify-contant-around ">
      <div className="row" >
      
     <div className="d-flex flex-row bd-highlight mb-4"></div>
     <i class="fa-solid fa-computer"></i>
  <div className="p-2 bd-highlight">STEALTH DOMAIN ACQUISITION </div>
  </div>
  </div>

  <div className="container2 justify-contant-around ">
      <div className="row" >
   
     <div className="d-flex flex-row bd-highlight mb-4"></div>
     <i class="fa-solid fa-user"></i>
  <div className="p-2 bd-highlight">DOMAIN VALUATION </div>
  </div>
  </div>


  <div className="container2 justify-contant-around ">
      <div className="row"  >
  
     <div className="d-flex flex-row bd-highlight mb-4"></div>
     <i class="fa-brands fa-algolia"></i>
  <div className="p-2 bd-highlight">PORTFOLIO MANAGMENT </div>
  </div>
  </div>
  

       
  
   </>
  )
}
