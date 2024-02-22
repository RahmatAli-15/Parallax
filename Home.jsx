import React from 'react'
import Plx from "react-plx";
import './Home.css'

const Home = () => {
  return (
   
    <div className='homeHero'>
        <Plx className='bgHome'
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale"
              }
            ]
          }
        ]}
        >
        <img className='bgHomeImg' src="./images/bg.png" alt="foreground" />
       
      </Plx>

      <Plx className='backgroundHome'
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
      >
     <img className='backgroundHomeImg' src="./images/4.jpg" alt="background" />
      </Plx>
    </div>
  )
}

export default Home
