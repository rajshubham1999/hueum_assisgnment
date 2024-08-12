import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='maincontainer'>
        <div className='icon'>
            <img className="icon-image" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Google_Chrome_logo_and_wordmark_%282015%29.png"/>

        </div>
        <div className='navbar-filed'>
            <div className='allbtns'>
                <button className='btn' >Home</button>
                <button className='btn'>The Browser By Google</button>
                <button className='btn'>Features  </button>
                <button className='btn'>Support </button>

            </div>
           

        </div>
    </div>
  )
}

export default Navbar