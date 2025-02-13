import React from 'react'
import './Service.css'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <section id='service'>
        <div className="container">
            <div className="service_head">
                <h2>Our Services</h2>
            </div>
            <div className="service_cards">
                <div className="singleServiceCard">   
                    <img src="/images/service1.png" alt="" />
                    <h2>Jewelry Repair</h2>
                </div>
                <div className="singleServiceCard">   
                    <img src="/images/service2.png" alt="" />
                    <h2>Ring Sizing</h2>
                </div>
                <div className="singleServiceCard">   
                    <img src="/images/service3.png" alt="" />
                    <h2>Jewelry Polishing</h2>
                </div>
            </div>
            <div className="service_btn">
                <Link>Learn More</Link>
            </div>
        </div>
    </section>
  )
}

export default Service