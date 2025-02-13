import React from 'react'
import './Review.css'

const Review = () => {
  return (
    <section id='review'>
        <div className="container">
            <div className="review_head">
                <h2>Customer reviews</h2>
            </div>
            <div className="review_cards">
                <div className="singleReviewCards">
                    <img src="/images/reviewsymbol.png" alt="" />
                    <div className="text">
                        <h2>Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.</h2>
                        <p>- Nico Jones</p>
                    </div>
                </div>
                <div className="singleReviewCards">
                    <img src="/images/reviewsymbol.png" alt="" />
                    <div className="text">
                        <h2>What an amazing shopping experience! I tried other jewelers and didn't find anything  I liked. Thank you so much.</h2>
                        <p>- Tracy Willis</p>
                    </div>
                </div>
                <div className="singleReviewCards">
                    <img src="/images/reviewsymbol.png" alt="" />
                    <div className="text">
                        <h2>Great quality, and showed they can work through a problem and maintain excellent customer service!!</h2>
                        <p>- Susana Santos</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Review