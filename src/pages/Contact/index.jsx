import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewsLetter from '../../sections/NewsLetter'
import Headline from './ContactSection/Headline'
import ContactForm from './ContactSection/ContactForm'


const Contact = () => {
  return (
    <>
        <Header />
        <Headline />
        <ContactForm />
        <NewsLetter />
        <Footer />
    </>
  )
}

export default Contact
