import React from "react";
import "./Footer.css"; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__sections">
        <div className="footer__section">
        <h3 style={{ color: "black", fontWeight: "bold" }}>Support</h3>
          <ul>
            <li><a href="#help" style={{color: "black"}}>Help Center</a></li>
            <li><a href="#aircover" style={{color: "black"}}>AirCover</a></li>
            <li><a href="#discrimination" style={{color: "black"}}>Anti-discrimination</a></li>
            <li><a href="#disability" style={{color: "black"}}>Disability support</a></li>
            <li><a href="#cancellation" style={{color: "black"}}>Cancellation options</a></li>
            <li><a href="#neighborhood" style={{color: "black"}}>Report neighborhood concern</a></li>
          </ul>
        </div>
      
        <div className="footer__section">
          <h3 style={{ color: "black", fontWeight: "bold" }}>Hosting</h3>
          <ul>
            <li><a href="#your-home" style={{color: "black"}}>Airbnb your home</a></li>
            <li><a href="#aircover-hosts" style={{color: "black"}}>AirCover for Hosts</a></li>
            <li><a href="#resources" style={{color: "black"}}>Hosting resources</a></li>
            <li><a href="#forum" style={{color: "black"}}>Community forum</a></li>
            <li><a href="#responsibly" style={{color: "black"}}>Hosting responsibly</a></li>
            <li><a href="#apartments" style={{color: "black"}}>Airbnb-friendly apartments</a></li>
            <li><a href="#class" style={{color: "black"}}>Join a free Hosting class</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 style={{ color: "black", fontWeight: "bold" }}>Airbnb</h3>
          <ul >
            <li><a href="#newsroom" style={{color: "black"}}>Newsroom</a></li>
            <li><a href="#features" style={{color: "black"}}>New features</a></li>
            <li><a href="#careers" style={{color: "black"}}>Careers</a></li>
            <li><a href="#investors" style={{color: "black"}}>Investors</a></li>
            <li><a href="#gifts" style={{color: "black"}}>Gift cards</a></li>
            <li><a href="#emergency" style={{color: "black"}}>Airbnb.org emergency stays</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2024 Airbnb, Inc. · <a href="#terms">Terms</a> · <a href="#sitemap">Sitemap</a> · <a href="#privacy">Privacy</a> · Your Privacy Choices</p>
        <div className="footer__bottom-right">
          <p>English (US) · $ USD</p>
          <div className="footer__social-icons">
            <a href="https://web.facebook.com/airbnb/?_rdc=1&_rdr"><i className="bx bxl-facebook"></i></a>
            <a href="https://twitter.com/airbnb?lang=en"><i className="bx bxl-twitter"></i></a>
            <a href="https://www.instagram.com/airbnb/"><i className="bx bxl-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
