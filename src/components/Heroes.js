import React from "react";
import { Table, Button } from "react-bootstrap";
import SearchBar from "./searchBar";

class Heroes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [
        {
          id: 1,
          nome: "superman",
          poder: "bbb",
          universo: "ccc",
          dataCad: "1111",
        },
        {
          id: 2,
          nome: "batman",
          poder: "33333",
          universo: "44444",
          dataCad: "55555",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <SearchBar/>
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
            {this.state.hero.map((hero) => (
              <tr>
                <td>{hero.nome}</td>
                <td>{hero.poder}</td>
                <td>{hero.universo}</td>
                <td>{hero.dataCad}</td>{" "}
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
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Heroes;
