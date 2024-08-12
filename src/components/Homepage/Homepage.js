import React from 'react'
import './Homepage.css'
import Slider from '../Slider/Slider'

function Homepage() {
  return (
    <div className='homepage-container'>
        <div className='main-heading'>
            <div className='main-icon'>
                <img className="chrome-icon" src="https://1000logos.net/wp-content/uploads/2017/08/Chrome-Logo.png"/>
            </div>
            <div className='main-text'>
                <div className='text1'>
                    <p>The browser</p>
                </div>
                <div className='text2'>
                    <p>built to be yours</p>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Homepage