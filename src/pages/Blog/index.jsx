import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewsLetter from '../../sections/NewsLetter'
import ArticleGrid from '../../components/ArticleGrid'
import BlogSection from '../../pages/Blog/Blogsection'

const Blog = () => {
    return (
        <>
            <Header />
            <BlogSection />
            <div className='flex bg-[#141414] px-6 items-center md:px-20 justify-between pt-10'>
                <h3 className='font-kumbh text-[22px] font-medium text-[#CCCCCC]'>Similar News</h3>
                <button className='text-[#98989A] font-inter font-normal text-sm border border-[#262626] flex items-center py-3.5 px-5 rounded-lg gap-2 hover:bg-[#262626] transition'>
                    View All News
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.875 3.625L16.25 3.625C16.4158 3.625 16.5747 3.69085 16.6919 3.80806C16.8092 3.92527 16.875 4.08424 16.875 4.25V13.625C16.875 13.9702 16.5952 14.25 16.25 14.25C15.9048 14.25 15.625 13.9702 15.625 13.625V5.75888L4.19194 17.1919C3.94786 17.436 3.55214 17.436 3.30806 17.1919C3.06398 16.9479 3.06398 16.5521 3.30806 16.3081L14.7411 4.875L6.875 4.875C6.52982 4.875 6.25 4.59518 6.25 4.25C6.25 3.90482 6.52982 3.625 6.875 3.625Z" fill="#FFD11A" />
                    </svg>

                </button>
            </div>
            <ArticleGrid />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Blog
