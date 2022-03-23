import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/experience'
import Services from './components/services/ser'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonial/test'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
const app = () => {
  return (
    <>

        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />\
        <Contact />
        <Footer />
        
        
        
    
    </>
  )
}

export default app