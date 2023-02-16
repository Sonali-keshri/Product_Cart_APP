import React,{useContext} from 'react'
import './style.css'
import {Link, Outlet } from 'react-router-dom'
import  { AppContext } from '../../../App';

const ThirdNav = () => {
  const {setSearchTerm} = useContext(AppContext)

  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "white" }}>
    <div className="container-fluid ">
      <ul className="navbar-nav secondnavMenu">
        <li className="nav-item">
          <Link exact="true" to='/' className="nav-link">
            Active Carts
          </Link>
        </li>
        <li className="nav-item">
          <Link to='archived' className="nav-link">
            Archived Carts
          </Link>
        </li>
      </ul>
    <input type='text' className='searchInput' placeholder='Search By Section' onChange={(e)=> setSearchTerm(e.target.value)} />
    </div>
  </nav>
  <Outlet/>
  </>
  )
}

export default ThirdNav
