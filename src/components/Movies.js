import React from 'react';
import data from "../data.json";
import Searchbar from './Searchbar';

class Movies extends React.Component {
    render() {
        return (
            <div>
            <Searchbar data={data}
            />
            <h1 className='page-title'>Movies</h1>
                <div className='grid'>
                {
                    data.filter(movie => (movie.category === "Movie")
                    ).map((movie, key) => (
                        <div className='grid-item' key={key}>
                        <img 
                            className='grid-image'
                            src={movie.thumbnail.regular.small}
                            srcSet={`
                            ${movie.thumbnail.regular.small} 300w,
                            ${movie.thumbnail.regular.medium} 768w,
                            ${movie.thumbnail.regular.large} 1280w
                            `}
                            alt={"A still from " + movie.title + "."}  
                            />
                            <div className="details">
                            <p>{movie.year}</p>
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
                            <p>{movie.category}</p>
                            <span className="seperator"></span>
                            <p>{movie.rating}</p>
                            </div>
                            <svg
                                className='bookmark-icon' 
                                width="12" 
                                height="14" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" 
                                stroke="#FFF"
                                strokeWidth="1.5"
                                {...movie.isBookmarked === true ? {fill:"#fff"} : {fill:"none"}}/>
                             </svg>
                             <span className="bookmark-icon-bg"></span>
                            <p className='title'>{movie.title}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Movies;