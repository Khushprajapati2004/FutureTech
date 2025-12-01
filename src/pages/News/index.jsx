import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewsLetter from '../../sections/NewsLetter'
import NewsHero from './NewsSections/NewsHero'
import ArticleGrid from '../../components/ArticleGrid'
import NewsBlog from './NewsSections/NewsBlog'
import FeatureVideo from './NewsSections/FeatureVideo'



const News = () => {
  return (
    <>
      <Header />
      <NewsHero />
      <ArticleGrid />
      <NewsBlog />
      <FeatureVideo />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default News
