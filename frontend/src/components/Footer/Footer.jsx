import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4>HomeMart</h4>
            <p>Your go-to destination for luck and style!</p>
          </div>
          <div className="col-lg-4">
            <h4>Categories</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Clothing</a>
              </li>
              <li>
                <a href="/">Accessories</a>
              </li>
              <li>
                <a href="/">Footwear</a>
              </li>
              <li>
                <a href="/">Jewelry</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h4>Contact Us</h4>
            <p>123 Mart Street, Mart City</p>
            <p>Email: info@HomeMart.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>&copy; 2023 Home Mart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
