import React from "react";
import { Table } from "react-bootstrap";

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
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
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
              <button type="button" class="btn btn-light">
                Alterar
              </button>
              <button type="button" class="btn btn-light">
                Deletar
              </button>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Heroes;
