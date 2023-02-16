import React from "react";
import "./style.css";
import {Link, Outlet} from "react-router-dom"

const MiddleNav = () => {
  return (
    <>
      <nav  className="navbar navbar-expand-lg" style={{ backgroundColor: "#34495E" }}>
        <div className="container-fluid">
          <ul className="navbar-nav m-auto navMenu">
            <li className="nav-item">
              <Link to="/" className="nav-link" >
                CARTS
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/fav' className="nav-link">
                FAVOURITES
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default MiddleNav;
