import React from 'react'
import { useNavigate } from "react-router-dom"
import HomePageImage from './Images/home-page-copy.jpg'

const Home = () => {

  // to navigate
  let navigate = useNavigate();

  return (
    <div className='home'>
      <div className='home-image' style={{ backgroundImage: `url(${HomePageImage})` }}>
    
        <p>Experience home-made deliciousness...</p>
        
        {/* On homepage, button leads to menu page */}
        <button onClick={() => {navigate("/menu")}}>Order Now</button> 
      </div>
    </div>
  )
}

export default Home