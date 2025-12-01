import React from 'react'
import Header from '../../components/Header';
import NewsLetter from '../../sections/NewsLetter';
import Footer from '../../components/Footer';
import Headline from './Sections/Headline';
import StatsSection from './Sections/StateSection';
import Analysis from './Sections/Analysis';
import ResourceCard from './Sections/ResourceCard';


const Resources = () => {
  return (
    <>
      <Header />
      <Headline />
      <StatsSection />
      <Analysis />
      <ResourceCard />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Resources;
