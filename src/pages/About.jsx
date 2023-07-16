import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About_con from '../components/About_con'


function About() {
  return (
   <>
   <Header logo={<>Ab<br/>Out</>}/>
   
   <About_con/>

   <Footer/>
   
   </>
  )
}

export default About