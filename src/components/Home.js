import React from "react";
import './Home.css';
import { Form, Button } from "react-bootstrap";

class Home extends React.Component {
render(){
  return (
    <div id="squareSearch">
      <Form>
        <Form.Group>
          <Form.Control></Form.Control>
        </Form.Group>
      </Form>
      <Button>Search</Button>
    </div>
  );
}
}

export default Home;
