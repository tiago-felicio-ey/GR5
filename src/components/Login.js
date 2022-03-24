import React from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  function handleSubmitLogin(e) {
    e.preventDefault();
    alert("Login");
  }

  return (
    <div id="squareSearch">
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
      <form onSubmit={handleSubmitLogin}>
        <Button type="submit" variant="outline-light">Login</Button>
      </form>
      <br />
      <br />
    </div>
  );
};

export default Login;
