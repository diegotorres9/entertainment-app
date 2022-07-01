import React from "react";
import series from "../series";
import Searchbar from "./Searchbar";

class Series extends React.Component {
    render() {
        return(
            <div>
            <Searchbar />
                <div className="grid">
                    <h1 className="title" style={{color: "#fff"}}>Series</h1>
                    {series.map((serie, key) => {
                        return(
                            <div className="serie" key={key}>
                                <Serie
                                    key={key}
                                    title={serie.title}
                                    category={serie.category}
                                    year={serie.year}
                                    rating={serie.rating}
                                    imagesmall={serie.thumbnail.regular.small}
                                    imagemedium={serie.thumbnail.regular.medium}
                                    imagelarge={serie.thumbnail.regular.large}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const Serie = ({title, category, year, rating, imagesmall, imagemedium, imagelarge}) => {
    return (
        <>
        <img className='serie-image'
        loading='lazy'
        src={imagelarge}
        srcSet={`${imagesmall} 300w, ${imagemedium} 768w, ${imagelarge} 1280w`} 
        alt={title} />
            <p className='year'> {year} </p>
            <span className='category'><img src="./assets/icon-category-tv.svg" alt="" /> <p>{category}</p> </span>
            <p className='rating'> {rating} </p>
            <p className='title'> {title} </p>
    </>
    )
}

export default Series;