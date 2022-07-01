import React from "react";
import Searchbar from "./Searchbar";
class Bookmark extends React.Component {
    render() {
        return(
            <div>
                <Searchbar />
                <h1>Bookmarked Movies</h1>
                <h2>Bookmarked Series</h2>
            </div>
        )
    }
}

export default Bookmark;