import React from 'react'
import ArticleCard from './ArticleCard';
import Article1Img from "../../assets/News/Article1Img.png";
import Article2Img from "../../assets/News/Article2Img.png";
import Article3Img from "../../assets/News/Article3Img.png";

const ArticleGrid = () => {

    const articles = [
        {
            image: Article1Img,
            title: "A Decisive Victory for Progressive Policies",
            category: "Politics",
            likes: "2.2k",
            comments: 60,
        },
        {
            image: Article2Img,
            title: "Tech Giants Unveil Cutting-Edge AI Innovations",
            category: "Technology",
            likes: "6k",
            comments: 92,
        },
        {
            image: Article3Img,
            title: "COVID-19 Variants",
            category: "Health",
            likes: "10k",
            comments: 124,
        },
    ];

    return (
        <>
            <section className=" px-4 sm:px-6 lg:px-20 py-12">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <ArticleCard key={index} {...article} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ArticleGrid;
