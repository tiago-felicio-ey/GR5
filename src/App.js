import "./App.css";
import Home from "./components/Home";
import Heroes from "./components/Heroes";
import AddHeroes from "./components/AddHero";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>GR5</h1>
      <BrowserRouter>

      <Nav variant="tabs">
        <Nav.Link as={Link} to="/home" >Home</Nav.Link>
        <Nav.Link as={Link} to="/heroes" >Heroes</Nav.Link>
        <Nav.Link as={Link} to="/addhero" >Add Hero</Nav.Link>
      </Nav>

      <Routes>
        <Route path="/home" index element={<Home/>}></Route>
        <Route path="/heroes" element={<Heroes/>}></Route>
        <Route path="/addhero"element={<AddHeroes/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
