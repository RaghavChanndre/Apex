import React from 'react'
import "./footer.css";
import Logo from  "../Image/Logo.jpg";
export default function Footer() {
  return (
   <>
   <div className="header">
   <p> Need help selling your premium domain or with a stealth acquisition? Get in touch!</p><br />
   <button type="button" class="btn btn-dark">Contanct</button>
   </div>
   <div className="footer"><br />
  <img src={Logo} alt="logo.img"  height="50px" />
  </div>
  <div className="footer">
    <div className="container"></div>
  <div className="row">
  
 <ul>
<li><u>Buys Domains</u></li>
<li >Past Sales</li>
<li >About Us</li>
<li>FAQs</li>
<li >Privacy</li>

</ul>
<ul>
<li class="bold"><u>Services</u></li>
<li>Domain brokerage</li>
<li>Stealth domain acquisition</li>
<li>Domain valuation and guidance</li>
<li>Portfolio management</li>
</ul>

<ul>
<li class="bold" color="blue"><u>Contact Us</u></li>
<li>Email: apexmoon@protonmail.com</li>
<li>Phone: +1-347-535-4375</li>
<li>Skype: apexmoon@protonmail.com</li>
</ul>


</div>
</div>


 </>
  )
}
