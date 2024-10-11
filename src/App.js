import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="Dictionary Logo" />
      </header>
      <h1>Dictionary</h1>
      <Dictionary />
    </div>
  );
}

export default App;
