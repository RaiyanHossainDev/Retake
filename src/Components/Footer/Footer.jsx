import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer_card">
                <div className='shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex lg:flex-row flex-col'>
                    <img src="/images/footerimg.png" alt="" />
                    <div className="footer_card_text">
                        <h2>Stay in touch?</h2>
                        <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer_row">
                <div className="single_item">
                    <h2>Product</h2>
                    <ul>
                        <li><Link>Privacy Policy</Link></li>
                        <li><Link>Terms of Service</Link></li>
                        <li><Link>FAQ</Link></li>
                    </ul>
                </div>
                <div className="single_item">
                    <h2>Resources</h2>
                    <ul>
                        <li><Link>Documentation</Link></li>
                        <li><Link>Case Studies</Link></li>
                    </ul>
                </div>
                <div className="single_item">
                    <h2>Company</h2>
                    <ul>
                        <li><Link>About Us</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="line"/>
        <div className="container">
            <div className="footer_row2">
                <h2>© Blue Diamond Jewelry™  2021</h2>
                <img src="/images/media.png" alt="" />
            </div>
        </div>
    </footer>
  )
}

export default Footer