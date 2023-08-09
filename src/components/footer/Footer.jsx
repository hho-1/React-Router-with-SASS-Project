import React from 'react'
import '../../scss/components/_footer.scss'

const Footer = ({footerPosit}) => {
  return (
    
        <footer className={footerPosit}>
            <div className='social-icons link-style'>
                <a href="https://www.twitter.com" target='blank'>
                    <i class="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://www.facebook.com" target='blank'>
                    <i class="fab fa-facebook fa-2x"></i>
                </a>
                <a href="https://www.instagram.com" target='blank'>
                    <i class="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://github.com/" target='blank'>
                    <i class="fab fa-github fa-2x"></i>
                </a>
            </div>
            <div class="copyright">&copy; Copyright 2023</div>
        </footer>
    
    
  )
}

export default Footer