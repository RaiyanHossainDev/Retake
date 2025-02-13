import React from 'react'
import Banner from '../Components/Banner/Banner'
import Type from '../Components/Type/Type'
import Hand from '../Components/Hand/Hand'
import Latest from '../Components/Latest/Latest'
import Review from '../Components/Review/Review'
import Service from '../Components/Service/Service'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Type/>
      <Hand/>
      <Latest/>
      <Review/>
      <Service/>
    </div>
  )
}

export default Home