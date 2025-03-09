import React from "react";
import "./App.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <img src="https://img.freepik.com/free-vector/gradient-mobile-store-logo-design_23-2149688666.jpg?t=st=1741541290~exp=1741544890~hmac=b59d7d16358278e1977677a462941bbb670bc767abd50f92e90b4e3c316b875f&w=1060" alt="MCOM Logo" id="F-img"/>
          <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.</p>
        </div>
        <div>
          <h4>Contact us</h4>
          <p>📧 example@mcom.com</p>
          <p>📍 123 Street, City, Country</p>
        </div>
        <div>
          <h4>Useful links</h4>
          <p>Shop All</p>
          <p>Track Order</p>
          <p>FAQs</p>
        </div>
        <div className="social-icons">
          <p>WhatsApp | Facebook | Instagram | TikTok</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
