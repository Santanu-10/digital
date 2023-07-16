import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact_con from '../components/Contact_con'

function Contact() {
  return (
    <>
    <Header logo={<>Con<br/>tact</>}/>

<Contact_con/>
    <Footer/>
    </>
  )
}

export default Contact