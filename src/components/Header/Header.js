import React from 'react'
import './header.css'
import {
  
  Link
} from "react-router-dom";



export default function Header() {
  return (
    <div>
      <header>
      <div className="container">
        <div className="header-main flex">
          <div className="header-logo">
            <a href="" className="logo">FREE SHOP</a>
          </div>
          <nav className="header-nav inline-flex">
            <ul className="flex">
              <li className="actived"><Link to="/">Trang chủ</Link></li>
              
              <li className="has-child">
              <Link to="/blog">Blog</Link>
                <div className="nav-child">
                  <a href="">Tech</a>
                  <a href="">Sport</a>
                  <a href="">Fashion</a>
                </div>
              </li>
              <li>
              <Link to="/category">Category</Link>
              </li>
              <li>
              <Link to="/product">Product</Link>
              </li>
              <li>
              <Link to="/login">Login</Link>
              </li>
              
            </ul>
            
          </nav>
          
          <div id="toggle_nav">
            <i className="fa fa-bars"></i>
          </div>
        </div>
        
      </div>
      
      
    </header>
    </div>
  )
}
