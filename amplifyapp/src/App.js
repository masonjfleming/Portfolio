import logo from './logo.svg';
import './App.css';
import bootstrap from "bootstrap";
import Navbar from "./Navbar";
import Card from "./Card";
import Modal from "./Modal"

function App() {
  return (
    <div className="App">
          <Navbar />

          <h1>CS 330L</h1>
          <h2>Section - 011</h2>
          <p>WVU ID: 800368703</p>
          <p>Hello! I am Mason Fleming, a senior majoring in Biomedical Engineering with a minor in Computer Science.</p>

          <Card />

          <footer><i className="bi bi-c-circle"></i> 2026, Mason Fleming</footer>
    </div>
  );
}

export default App;
