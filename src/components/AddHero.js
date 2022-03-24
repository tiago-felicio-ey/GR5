import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./AddHero.css";

const AddHero = () => {
  const [hero, setHero] = useState({
    nome: "",
    poder: "",
    universo: "",
    data: "",
  });
  
  const handleChange = (e) => {
    let newHero = hero;
    newHero[e.target.nome] = e.target.value;
    setHero({ ...newHero });
  };

  const handleSubmit = (e) => {
    fetch("https://localhost:3000", {
      method: "POST",
      body: JSON.stringify(hero),
    });
    e.currentTarget.submit();
  };

  return (
    <div>
      <div id="squareSearch">
        <h1 id="textColor">Adicionar Heróis</h1>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Row className="mb-3">
            <Col>
              <Form.Control
                placeholder="Nome do Herói"
                onBlur={(e) => handleChange(e)}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Poder do Herói"
                onBlur={(e) => handleChange(e)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                placeholder="Universo"
                onBlur={(e) => handleChange(e)}
              />
            </Col>
            <Col>
              <Form.Control type="date" onChange={(e) => handleChange(e)} />
            </Col>
          </Row>
        </Form>
      </div>
      <div id="padding">
        <Button variant="outline-light">Adicionar Herói</Button>
      </div>
    </div>
  );
};

export default AddHero;
