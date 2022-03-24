import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./AddHero.css";

class AddHeroes extends React.Component {
  render() {
    return (
      <div>
        <div id="squareSearch">
          <h1 id="textColor">Adicionar Heróis</h1>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Control placeholder="Nome do Herói" />
              </Col>
              <Col>
                <Form.Control placeholder="Poder do Herói" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control placeholder="Universo" />
              </Col>
              <Col>
                <Form.Control type="date" />
              </Col>
            </Row>
          </Form>
        </div>
        <div id="padding">
          <Button variant="outline-light">Adicionar Herói</Button>
        </div>
      </div>
    );
  }
}

export default AddHeroes;
