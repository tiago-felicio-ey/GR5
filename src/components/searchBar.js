import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./searchBar.css";



const SearchBar = () => {

  return (
    <div id="searchCard">
      <div id="squareSearch">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Heroi ..."
            aria-label="Heroi"
            aria-describedby="basic-addon2"
          />
          <form>
            <Button
              type="submit"
              variant="outline-secondary"
              id="button-addon2"
            >
              <Link to="/heroes">Pesquisar</Link>
            </Button>
          </form>
        </InputGroup>
      </div>
    </div>
  );
};
export default SearchBar;
