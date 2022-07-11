import React, { useState } from "react";
// import data from "../data.json";

export default function Searchbar({data}) {
    const currentPath = window.location.pathname;
    const [search, setSearch] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleSearch = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        const newSearch = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        setSearch(newSearch);
        if(searchWord === "") {
            setSearch([]);
        } else {
            setSearch(newSearch);
        }
        console.log(newSearch);
    }
    return(
        <>
        <div className="searchbar-container">
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" fill="#FFF"/></svg>
            <input
                type="text"
                placeholder=
                {
                    currentPath === "/" ? "Search for movies or TV Series" 
                    : currentPath === "/movies" ? "Search for movies"
                    : currentPath === "/series" ? "Search for TV series"
                    : currentPath === "/bookmarks" ? "Search for bookmarked shows" : "Searh Here"
                }
                value={wordEntered}
                onChange={handleSearch}
            />
        </div>
        {search.length !== 0 && (
            <div className="grid">
                {
                    search.slice(0, 10).map((value, key) => {
                        return  (
                            <div className="grid-item" key={key}>
                                <img 
                                className='grid-image'
                                src={value.thumbnail.regular.small}
                                    srcSet={`
                                    ${value.thumbnail.regular.small} 300w,
                                    ${value.thumbnail.regular.medium} 768w,
                                    ${value.thumbnail.regular.large} 1280w
                                    `}
                                    alt={"A still from " + value.title + "."}  
                                />
                                <div className="details">
                                    <p>{value.year}</p>
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
                                    <p>{value.category}</p>
                                    <span className="seperator"></span>
                                    <p>{value.rating}</p>
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
                                <p className='title'>{value.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        )}
        </>
    )
}