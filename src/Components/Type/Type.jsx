import React from 'react'
import './Type.css'

const Type = () => {
  return (
    <section id='type'>
        <div className="container">
            <div className="type_head">
                <h2>Shop by Jewelry Type</h2>
            </div>
            <div className="type_cards">
                <div className="singleTypeCard">
                    <img src="/images/type1.png" alt="" />
                    <h2>Earrings</h2>
                </div>
                <div className="singleTypeCard">
                    <img src="/images/type2.png" alt="" />
                    <h2>necklaces</h2>
                </div>
                <div className="singleTypeCard">
                    <img src="/images/type3.png" alt="" />
                    <h2>bracelets</h2>
                </div>
                <div className="singleTypeCard">
                    <img src="/images/type4.png" alt="" />
                    <h2>all Rings</h2>
                </div>
                <div className="singleTypeCard">
                    <img src="/images/type5.png" alt="" />
                    <h2>engagement rings</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Type