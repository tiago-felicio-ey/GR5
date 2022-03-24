import "./App.css";
import Home from "./components/Home";
import Heroes from "./components/Heroes";
import AddHeroes from "./components/AddHero";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/heroes" element={<Heroes />}></Route>
          <Route path="/addhero" element={<AddHeroes />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
