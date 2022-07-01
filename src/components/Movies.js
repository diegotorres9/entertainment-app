import React from 'react';
import movies from '../movies';

class Movies extends React.Component {
    render() {
        return (
            <div className='grid'>
            <h1 className='title' style={{color: "#fff"}}>Movies</h1>
            {movies.map((movie, key) => {
                return(
                    <div className="movie" key={key}>
                    <Movie
                    key={key}
                    title={movie.title}
                    category={movie.category}
                    year={movie.year}
                    rating={movie.rating}
                    imagesmall={movie.thumbnail.regular.small}
                    imagemedium={movie.thumbnail.regular.medium}
                    imagelarge={movie.thumbnail.regular.large}
                    />
                    </div>
                )
            })}
            </div>
        )
    }
}
const Movie = ({title, category, year, rating, imagesmall, imagemedium, imagelarge}) => {
    return (
        <>
            <img className='movie-image'
            loading='lazy'
            src={imagelarge}
            srcSet={`${imagesmall} 300w, ${imagemedium} 768w, ${imagelarge} 1280w`} 
            alt={title} />
                <p className='year'> {year} </p>
                <span className='category'><img src="./assets/icon-category-movie.svg" alt="" /> <p>{category} </p></span>
                <p className='rating'> {rating} </p>
                <p className='title'> {title} </p>
        </>
    )
} 
export default Movies;