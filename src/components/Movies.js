import React from 'react';
import data from "../data.json";
// import movieIcon from "../icon-category-movie.svg";
import Searchbar from './Searchbar';

class Movies extends React.Component {
    render() {
        return (
            <div>
            <Searchbar 
            />
                <div className='grid'>
                <h1 className='title' style={{color: "#fff"}}>Movies</h1>
                {
                    data.filter(movie => {
                        if(movie.category === "Movie"){
                            return movie
                        }
                    }).map((movie, key) => (
                        <div className='movie' key={key}>
                            <p>{movie.title}</p>
                            <p>{movie.year}</p>
                            {/* <img src={movieIcon} alt="Movie Icon." /> */}
                            <p>{movie.category}</p>
                            <p>{movie.rating}</p>
                            <img src={movie.thumbnail.regular.small}
                                srcSet={`
                                ${movie.thumbnail.regular.small} 300w,
                                ${movie.thumbnail.regular.medium} 768w,
                                ${movie.thumbnail.regular.large} 1280w
                                `}
                                alt="A Still from the movie." />
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Movies;