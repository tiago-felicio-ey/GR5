import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

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
          <Button variant="outline-secondary" id="button-addon2">
            Pesquisar
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default SearchBar;
