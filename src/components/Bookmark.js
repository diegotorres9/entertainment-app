import React from "react";
import Searchbar from "./Searchbar";
class Bookmark extends React.Component {
    render() {
        return(
            <div>
                <Searchbar />
                <p>Bookmarked Movies</p>
                <p>Bookmarked TV Series</p>
            </div>
        )
    }
}

export default Bookmark;