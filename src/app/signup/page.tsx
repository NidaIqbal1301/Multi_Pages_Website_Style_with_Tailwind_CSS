"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; 

const Page = () => {
  return (
    <div>
      {/* Top Navigation Bar */}
      <div className="top_nav">
        <div className="container top_nav_container">
          <div className="top_nav_wrapper">
            <p className="top_nav_p">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
            <Link href="/shop" className="top_nav_link">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="nav">
        <div className="container nav_container">
          <Link href="/" className="nav_logo">
            EXCLUSIVE
          </Link>
          <ul className="nav_list">
            <li className="nav_item"><Link href="/" className="nav_link">Home</Link></li>
            <li className="nav_item"><Link href="/about" className="nav_link">About</Link></li>
            <li className="nav_item"><Link href="/contact" className="nav_link">Contact</Link></li>
            <li className="nav_item"><Link href="/signup" className="nav_link">Sign up</Link></li>
          </ul>
          <div className="nav_items">
            <form action="#" className="nav_form">
              <input type="text" className="nav_input" placeholder="Search here..." />
             
              <Image src="/images/search.png" alt="Search" width={20} height={20} />
            </form>
            <Image src="/images/heart.png" alt="Wishlist" width={25} height={30} />
            <Link href="/cart">
              <Image src="/images/cart.png" alt="Cart" width={30} height={30} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Authentication Section */}
      <section className="section">
        <div className="auth_container">
          <div className="auth_img">
            
            <Image src="/images/auth-image.png" alt="Auth" width={400} height={400} />
          </div>
          <div className="auth_content">
            <form className="auth_form">
              <h2 className="form_title">Create your account</h2>
              <p className="auth_p">Enter your details below</p>
              <div className="form_group">
                <input type="text" placeholder="Name" className="form_input" />
              </div>
              <div className="form_group">
                <input type="email" placeholder="Email" className="form_input" />
              </div>
              <div className="form_group form_pass">
                <input type="password" placeholder="Password" className="form_input" />
              </div>
              <div className="form_group">
                <button type="submit" className="form_btn">Create Account</button>
              </div>
              <div className="form_group">
                <span>
                  Already have an account? <Link href="/login" className="form_auth_link">Login</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container footer_container">
          <div className="footer_item">
            <Link href="/" className="footer_logo">Exclusive</Link>
            <div className="footer_p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem fuga harum voluptate?
            </div>
          </div>
          <div className="footer_item">
            <h3 className="footer_item_title">Support</h3>
            <ul className="footer_list">
              <li className="footer_list_item">Stockholm, Sweden</li>
              <li className="footer_list_item">email&#64;gmail.com</li>
              <li className="footer_list_item">+46 123 456 78</li>
              <li className="footer_list_item">+46 72 345 67</li>
            </ul>
          </div>
          <div className="footer_item">
            <h3 className="footer_item_title">Account</h3>
            <ul className="footer_list">
              <li className="footer_list_item">Login / Register</li>
              <li className="footer_list_item">Cart</li>
              <li className="footer_list_item">Shop</li>
            </ul>
          </div>
          <div className="footer_item">
            <h3 className="footer_item_title">Information</h3>
            <ul className="footer_list">
              <li className="footer_list_item">Privacy Policy</li>
              <li className="footer_list_item">Terms of Use</li>
              <li className="footer_list_item">FAQ&apos;s</li>
              <li className="footer_list_item">Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container footer_bottom_container">
            <p className="footer_copy">Copyright Exclusive 2023. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
