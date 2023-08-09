import React from 'react'
import Footer from '../../components/footer/Footer'
import '../../scss/pages/_about.scss'
import Navbar from '../../components/navbar/Navbar'

const AboutUs = () => {
  return (
    <div>
      <div className='about-bgImg-container'>
        <Navbar/>
        <div className='about__bio-image'>
        <h2>BIO</h2>
        <p>Wednesday Addams is a fictional character from the Addams Family multimedia franchise created by American cartoonist Charles Addams. She is typically portrayed as a morbid and emotionally reserved child that is fascinated by the macabre, often identified by her pale skin and black pigtails. Wednesday has been portrayed by several actresses in various films and television series, including Lisa Loring in the television series The Addams Family (1964), Christina Ricci in the feature films The Addams Family (1991) and Addams Family Values (1993), and Jenna Ortega in the streaming television series Wednesday (2022).</p>
        </div>
      </div>
      <div className='about'>
        <div className='about__container'>
          <section className='about__job'>
            <h2>2020 - 2021</h2>
            <h3>Clarusway</h3>
            <h6>Instructor & Full Stack Developer</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</p>
          </section>
          <section className='about__job'>
            <h2>2019 - 2020</h2>
            <h3>Google</h3>
            <h6>Front End Developer</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</p>
          </section>
          <section className='about__job'>
            <h2>2017 - 2019</h2>
            <h3>The Best Websites Co.</h3>
            <h6>Front End Developer</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</p>
          </section>

        </div>


    </div>
    
    
      
        
        
        
        <Footer footerPosit={"vertical"} />
    </div>
  )
}

export default AboutUs