import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Experience from './components/experience/experience'
import About from './components/about/about'
import Services from './components/services/services'
//import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const app = () => {
  return (
    <>
    <Header/>
    <br></br>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <br></br><br></br>
    {/*<Portfolio/>*/}
    <Contact/>
    <Footer/>
    </>
  )
}

export default app