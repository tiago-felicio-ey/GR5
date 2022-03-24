import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default (CardRow) => {
  return (
    <Row xs={1} sm={2} md={4} lg={6} className="g-6">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://site112.com/img/240x240.png" />
            <Card.Body>
              <Card.Title>Hard code</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
