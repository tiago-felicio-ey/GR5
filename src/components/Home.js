import React from "react";
import "./Home.css";
import CardRow from "./CardRow";
import SearchBar from "./searchBar";

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <div id="cardRowAlign">
          <CardRow />
        </div>
      </div>
    );
  }
}

export default Home;
