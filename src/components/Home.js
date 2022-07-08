import React from "react";
import data from "../data.json";
import Searchbar from "./Searchbar";

class Home extends React.Component {
    render() {
        return(
            <div>
            <Searchbar />
                <h1 className="page-title">Trending</h1>
                <div className="trending">
                    {
                        data.filter(trending => (trending.isTrending === true)
                        ).map((trending, key) => (
                            <div className="grid-item" key={key}>
                            <img 
                                className='grid-image'
                                src={trending.thumbnail.regular.small}
                                srcSet={`
                                ${trending.thumbnail.regular.small} 300w,
                                ${trending.thumbnail.regular.medium} 768w,
                                ${trending.thumbnail.regular.large} 1280w
                                `}
                                alt={"A still from " + trending.title + "."}  
                            />
                                <div className="details">
                                    <p>{trending.year}</p>
                                    <span className="seperator"></span>
                                    <svg 
                                    className='category-icon'
                                    width="12" 
                                    height="12" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" 
                                    fill="#FFF"
                                    opacity=".75"
                                    />
                                    </svg>
                                    <p>{trending.category}</p>
                                    <span className="seperator"></span>
                                    <p>{trending.rating}</p>
                                </div>
                                <svg
                                className='bookmark-icon' 
                                width="12" 
                                height="14" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" 
                                stroke="#FFF"
                                strokeWidth="1.5" 
                                fill="none" />
                             </svg>
                             <span className="bookmark-icon-bg"></span>
                            <p className='title'>{trending.title}</p>
                            </div>

                        ))
                    }
                </div>
                <p className="page-title">Recommended for you</p>
                    <div className="grid">
                        {
                            data.filter(recommended => (recommended.isRecommended === true)
                            ).map((recommended, key) => {
                                if(recommended.category === "Movie") {
                                    return <div className="grid-item" key={key}>
                                        <img 
                                            className='grid-image'
                                            src={recommended.thumbnail.regular.small}
                                            srcSet={`
                                            ${recommended.thumbnail.regular.small} 300w,
                                            ${recommended.thumbnail.regular.medium} 768w,
                                            ${recommended.thumbnail.regular.large} 1280w
                                            `}
                                            alt={"A still from " + recommended.title + "."}  
                                        />
                                        <div className="details">
                                            <p>{recommended.year}</p>
                                            <span className="seperator"></span>
                                            <svg 
                                                className='category-icon'
                                                width="12" 
                                                height="12" 
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" 
                                                fill="#FFF"
                                                opacity=".75"
                                                />
                                            </svg>
                                            <p>{recommended.category}</p>
                                            <span className="seperator"></span>
                                            <p>{recommended.rating}</p>
                                        </div>
                                        <svg
                                            className='bookmark-icon' 
                                            width="12" 
                                            height="14" 
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" 
                                            stroke="#FFF"
                                            strokeWidth="1.5" 
                                            fill="none" />
                                        </svg>
                                        <span className="bookmark-icon-bg"></span>
                                        <p className='title'>{recommended.title}</p>
                                    </div>
                                }
                                return <div className="grid-item" key={key}>
                                    <img 
                                        className='grid-image'
                                        src={recommended.thumbnail.regular.small}
                                        srcSet={`
                                        ${recommended.thumbnail.regular.small} 300w,
                                        ${recommended.thumbnail.regular.medium} 768w,
                                        ${recommended.thumbnail.regular.large} 1280w
                                        `}
                                        alt={"A still from " + recommended.title + "."}  
                                    />
                                    <div className="details">
                                        <p>{recommended.year}</p>
                                        <span className="seperator"></span>
                                        <svg 
                                            className="category-icon" 
                                            width="12" 
                                            height="12" 
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z" fill="#FFF" opacity=".75"/>
                                        </svg>
                                        <p>{recommended.category}</p>
                                        <span className="seperator"></span>
                                        <p>{recommended.rating}</p>
                                    </div>
                                    <svg
                                        className='bookmark-icon' 
                                        width="12" 
                                        height="14" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" 
                                        stroke="#FFF"
                                        strokeWidth="1.5" 
                                        fill="none" />
                                    </svg>
                                    <span className="bookmark-icon-bg"></span>
                                    <p className='title'>{recommended.title}</p>
                                </div>
                            })
                        }
                    </div>
            </div>
        )
    }
}

export default Home;