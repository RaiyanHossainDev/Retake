import React from 'react'
import './Latest.css'
import { Link } from 'react-router-dom'

const Latest = () => {
  return (
    <section id='latest'>
        <div className="container">
            <div className="latest_head">
                <h2>OUR LATEST JEWELRY</h2>
            </div>
            <div className="latest_cards">
                <img src="/images/latest1.png" alt="" />
                <img src="/images/latest2.png" alt="" />
                <img src="/images/latest3.png" alt="" />
            </div>
            <div className="latest_btn">
                <Link>VIEW GALLERY</Link>
            </div>
        </div>
    </section>
  )
}

export default Latest