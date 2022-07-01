import React from "react";
import Searchbar from "./Searchbar";

class Home extends React.Component {
    render() {
        return(
            <div>
            <Searchbar/>
                <h1>Trending</h1>
                <h2>Recommended for you</h2>
            </div>
        )
    }
}

export default Home;