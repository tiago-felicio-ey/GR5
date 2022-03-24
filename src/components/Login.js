import React from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
      <Button variant="outline-light">Login</Button>
    </div>
  );
};

export default Login;
