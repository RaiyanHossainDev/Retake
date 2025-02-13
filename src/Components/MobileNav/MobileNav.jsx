import React, { useState } from 'react'
import './MobileNav.css'
import { Link } from 'react-router'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const MobileNav = () => {
    const [nav,setNav] = useState(false)
    
  return (
    <nav id='mobileNav'>
        <div className="container mx-auto">
            <div className="mobileMenu_row">
                <div className="menu_logo">
                    <img src="/images/logo.png" alt="" />
                </div>
                <div className="main_menu">
                    <ul className={`${nav?'top-[67px]':'top-[-50%]'}`}>
                        <li><Link>Home</Link></li>
                        <li><Link>Shop</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                    <div className="drp">
                        <IoIosArrowDown className={nav?'rotate-[180deg]':' rotate-0'} onClick={()=>setNav(!nav)}/>
                    </div>
                    <div className="bag">
                        <HiOutlineShoppingBag />
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default MobileNav