import React from 'react'
import '../../scss/pages/_home.scss';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  return (
    <div className='home-bgImg-container'>
      <Navbar/>
      <div className='home'>
      <h1>Hi! My name is </h1>
      <section className='home__name'>Wednesday <span className='home__name--last'>Addams</span></section>
      <h1>Full Stack Web Developer</h1>
      </div>

      <Footer footerPosit={"horizontal"} />
    </div>
    
    
  )
}

export default Home