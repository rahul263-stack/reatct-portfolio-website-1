import React from 'react'
import './about.css'
import ME from '../../assets/me2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='About Img'/>
        </div>
      </div>

    <div className='about__content'>
      <div className='about__cards'>
        
        <article className='about__card'>
          <FaAward className='about__icon' />
          <h5>Experience</h5>
          <small>1+ years Working</small>         
        </article>

        <article className='about__card'>
          <FiUsers className='about__icon' />
          <h5>Clients</h5>
          <small>200+ clients worldwide</small>         
        </article>

        <article className='about__card'>
          <VscFolderLibrary className='about__icon' />
          <h5>Projects</h5>
          <small>30+ completed Projects</small>         
        </article>
      </div>

      <p>
      Hi! I am a Data Scientist, ready to thrive in demanding digital intelligence processing environments. 
      Well-informed on the latest machine learning advancements.
      Ready to combine tireless hunger for new skills with a desire to exploit cutting-edge data science technology.
      </p>

      <a href='#contact' className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>
    </section>
  )
}

export default About