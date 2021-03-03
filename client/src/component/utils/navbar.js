import React, { useContext,useState } from 'react';
// import { Link } from 'react-router-dom';
import shopContext from '../context/shopContext';

const NavBar = () => {
  const shop=useContext(shopContext)
  const totalItemsInCart=shop.totalItemsInCart

 
  return (
    <div>
      <nav className="navbar navbar fixed-top navbar-expand-lg  navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand text-info font-italic" data-toggle="collapse" data-target=".navbar-collapse.show"href="/">O-Shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle='collapse'  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/cart" className="nav-link  active"data-toggle="collapse" data-target=".navbar-collapse.show" aria-current="page"><i className="fa fa-shopping-cart fa-2x text-primary" ></i><span className="badge bg-info"  >{totalItemsInCart()}</span></a>
              </li>
              </ul>
          
              </div>
            </div>
      </nav>
    </div>
  );
};

export default NavBar;