import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container footer_container">
          <div className="footer_item">
            <a href="#" className="footer_logo">
              Exclusive
            </a>
            <div className="footer_p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem fuga harum voluptate?
            </div>
          </div>
          <div className="footer_item">
            <h3 className="footer_item_title">Support</h3>
            <ul className="footer_list">
              <li className="li footer_list_item">Stockholm, Sweden</li>
              <li className="li footer_list_item">email&#64;gmail.com</li>
              <li className="li footer_list_item">+46 123 456 78</li>
              <li className="li footer_list_item">+46 72 345 67</li>
            </ul>
          </div>
          <div className="footer_item">
            <h3 className="footer_item_title">Account</h3>
            <ul className="footer_list">
              <li className="li footer_list_item">My Account</li>
              <li className="li footer_list_item">Login / Register</li>
              <li className="li footer_list_item">Cart</li>
              <li className="li footer_list_item">Shop</li>
            </ul>
          </div>
          <div className="footer_item">
            <h3 className="footer_item_title">Quick Link</h3>
            <ul className="footer_list">
              <li className="li footer_list_item">Privacy policy</li>
              <li className="li footer_list_item">Terms of use</li>
              <li className="li footer_list_item">FAQ&apos;s</li>
              <li className="li footer_list_item">Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container footer_bottom_container">
            <p className="footer_copy">
              Copyright Exclusive 2024. All right reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
