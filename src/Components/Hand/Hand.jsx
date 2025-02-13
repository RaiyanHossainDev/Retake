import React from 'react'
import './Hand.css'
import { Link } from 'react-router-dom'

const Hand = () => {
  return (
    <section id='hand'>
    <div className="container">
        <div className="hand_row">
            <div className="hand_text">
                    <h2>Hand Crafted  fine pieces.</h2>
                    <p>We also firmly believed that our customers  deserved more choices, straightforward  information and legendary service.</p>
                    <Link>Learn More</Link>
            </div>
            <div className="hand_img">
                <img src="/images/handimg.png" alt="" />
            </div>
        </div>
    </div>
    </section>
  )
}

export default Hand