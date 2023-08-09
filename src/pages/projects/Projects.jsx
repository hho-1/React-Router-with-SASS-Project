import React from 'react'
import Footer from '../../components/footer/Footer'
import '../../scss/pages/_projects.scss'
import Navbar from '../../components/navbar/Navbar'
import resim1 from '../../img/project-1.jpg'
import resim2 from '../../img/project-2.jpg'
import resim3 from '../../img/project-3.jpg'
import resim4 from '../../img/project-4.jpg'
import resim5 from '../../img/project-5.jpg'
import resim6 from '../../img/project-6.jpg'

const Projects = () => {
  return (
    <div>

      <div className='project-bgImg-container'>
        <Navbar/>
        <div className='projects__bio-image'>
        <h1>My Projects</h1>
        </div>
      </div>
      <section className='projects'>
        <div className='projects__items'>
          <section className='projects__item'>
            <img src={resim1} alt="resim1" />
          </section>
          <section className='projects__item'>
            <img src={resim2} alt="resim2" />
          </section>
          <section className='projects__item'>
            <img src={resim3} alt="resim3" />
          </section>
          <section className='projects__item'>
            <img src={resim4} alt="resim4" />
          </section>
          <section className='projects__item'>
            <img src={resim5} alt="resim5" />
          </section>
          <section className='projects__item'>
            <img src={resim6} alt="resim6" />
          </section>

        </div>


        <Footer footerPosit={"vertical"} />
      </section>

      
    </div>
  )
}

export default Projects