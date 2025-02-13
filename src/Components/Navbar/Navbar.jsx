import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav id='nav'>
        <div className="container mx-auto">
            <div className="menu_row">
                <div className="menu_logo">
                    <img src="/images/logo.png" alt="" />
                </div>
                <div className="main_menu">
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>Shop</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                    <div className="bag">
                        <HiOutlineShoppingBag />
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar