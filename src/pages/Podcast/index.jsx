import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NewsLetter from '../../sections/NewsLetter';
import Headline from './PodcastSection/Headline';
import PodcastResource from './PodcastSection/PodcastResource';
import LatestPodcast from './PodcastSection/LatestPodcast';



const Podcast = () => {
  return (
    <>
      <Header />
      <Headline />
      <PodcastResource />
      <LatestPodcast />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Podcast;



