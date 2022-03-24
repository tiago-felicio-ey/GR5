import React from "react";
import { Table, Button } from "react-bootstrap";
import SearchBar from "./searchBar";

const Heroes = () => {
  function handleSubmitUpdate(e) {
    e.preventDefault();
    alert("Update");
  }
  function handleSubmitDelete(e) {
    e.preventDefault();
    alert("Delete");
  }

  return (
    <div>
      <SearchBar />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th id="whiteTxt">Nome</th>
            <th>Poder</th>
            <th>Universo</th>
            <th>Data de cadastro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hero_name</td>
            <td>hero_power</td>
            <td>hero_universe</td>
            <td>hero_date</td>
            <td id="margin">
              <form onSubmit={handleSubmitUpdate}>
                <Button type="submit" variant="outline-light" size="sm">
                  Alterar
                </Button>
              </form>
            </td>
            <td id="margin">
              <form onSubmit={handleSubmitDelete}>
                <Button type="submit" variant="outline-light" size="sm">
                  Deletar
                </Button>
              </form>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Heroes;
