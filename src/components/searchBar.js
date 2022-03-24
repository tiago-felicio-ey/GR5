import React from "react";
import { Form, Button } from "react-bootstrap";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <section id="searchCard">
          <div id="squareSearch">
            <Form>
              <Form.Group>
                <Form.Control></Form.Control>
              </Form.Group>
            </Form>
          </div>
          <Button id="margin">Search</Button>
        </section>
      </div>
    );
  }
}

export default SearchBar;