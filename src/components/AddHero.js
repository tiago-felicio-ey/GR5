import React from "react";
import { Form, Button } from "react-bootstrap";
import "./AddHero.css";

class AddHeroes extends React.Component {
  render() {
    return (
      <div>
        <h1>Adicionar Heróis</h1>
        <Form>
          <Form.Group>
            <Form.Label>Nome Do Herói</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Poder do herói</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Universo</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Data</Form.Label>
            <Form.Control type="date"></Form.Control>
          </Form.Group>
          <Button variant="primary">Adicionar Herói</Button>
        </Form>
      </div>
    );
  }
}

export default AddHeroes;
