import React from "react";
import { Table, Button } from "react-bootstrap";
import SearchBar from "./searchBar";

const Heroes = () => {

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
              <Button variant="outline-light" size="sm">
                Alterar
              </Button>
            </td>
            <td id="margin">
              <Button variant="outline-light" size="sm">
                Deletar
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Heroes;
