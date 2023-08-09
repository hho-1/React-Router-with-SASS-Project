import React from 'react'
import { useNavigate } from 'react-router-dom'
import './error.scss'
import Footer from '../footer/Footer'


const Error = () => {
let navigate = useNavigate()
  return (
    <div>
      <div className='error-cont'>
        <h1>Ooooops! You wrote the address false.</h1>
        <button className='go-home-button' onClick={() => navigate('/')}>GO TO MAIN PAGE</button>
    </div>
    <Footer footerPosit={"horizontal"} />
    </div>
    
  )
}

export default Error