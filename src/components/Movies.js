import React from 'react';
import data from "../data.json";
// import movieIcon from "../icon-category-movie.svg";
import Searchbar from './Searchbar';

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fill: "none"
        }
        
    }
    fillChange = () => {
        this.setState({ fill: "#fff" })
    }
    render() {
        return (
            <div>
            <Searchbar 
            />
                <div className='grid'>
                <h1 className='title'>Movies</h1>
                {
                    data.filter(movie => {
                        if(movie.category === "Movie"){
                            return movie
                        }
                        return movie
                    }).map((movie, key) => (

                        <div className='movie' key={key}>
                            <p>{movie.title}</p>
                            <p>{movie.year}</p>
                            <p>{movie.category}</p>
                            <p>{movie.rating}</p>
                            <svg onClick={this.fillChange} 
                                className='bookmark-icon' 
                                width="12" 
                                height="14" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" 
                                stroke="#FFF"
                                strokeWidth="1.5" 
                                fill={this.state.fill} />
                             </svg>
                            <img src={movie.thumbnail.regular.small}
                                srcSet={`
                                ${movie.thumbnail.regular.small} 300w,
                                ${movie.thumbnail.regular.medium} 768w,
                                ${movie.thumbnail.regular.large} 1280w
                                `}
                                alt={"A still from " + movie.title + "."}  />
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Movies;