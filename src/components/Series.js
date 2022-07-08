import React from "react";
import data from "../data.json";
import Searchbar from "./Searchbar";

class Series extends React.Component {
    render() {
        return(
            <div>
            <Searchbar />
            <h1 className="page-title">Series</h1>
                <div className="grid">
                {
                    data.filter(serie => (serie.category === "TV Series")
                    ).map((serie, key) => (
                        <div className="grid-item" key={key}>
                            <img 
                                className='grid-image'
                                src={serie.thumbnail.regular.small}
                                srcSet={`
                                ${serie.thumbnail.regular.small} 300w,
                                ${serie.thumbnail.regular.medium} 768w,
                                ${serie.thumbnail.regular.large} 1280w
                                `}
                                alt={"A still from " + serie.title + "."}  
                            />
                            <div className="details">
                                <p>{serie.year}</p>
                                <span className="seperator"></span>
                                <svg 
                                    className="category-icon" 
                                    width="12" 
                                    height="12" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z" fill="#FFF" opacity=".75"/>
                                </svg>
                                <p>{serie.category}</p>
                                <span className="seperator"></span>
                                <p>{serie.rating}</p>
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
                            <p className='title'>{serie.title}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Series;