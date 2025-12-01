import React from 'react'
import Hero from '../../sections/Hero';
import FetureSection from '../../sections/FetureSection';
import BlogSection from '../../sections/BlogSection';
import Resource from '../../sections/Resource';
import Testimonials from '../../sections/Testimonials';
import NewsLetter from '../../sections/NewsLetter';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FetureSection />
      <BlogSection />
      <Resource />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Home;
