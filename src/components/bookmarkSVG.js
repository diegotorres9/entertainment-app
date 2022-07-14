import React, { useState } from "react";

function BookmarkSVG() {
    const [bookmark, setBookmark] = useState(false);
    return (
        <svg
        onClick={() => setBookmark(!bookmark)}
        className='bookmark-icon' 
        width="12" 
        height="14" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" 
        stroke="#FFF"
        strokeWidth="1.5"
        {...bookmark ? {fill:"#fff"} : {fill:"none"}}
        />
     </svg>
    )
}

export default BookmarkSVG;