import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="Dictionary Logo" />
      </header>
      <h1>Dictionary App</h1>
      <Dictionary />
      <footer>
        This project was coded by
        <a
          href="https://hollyberrywigmore.com/"
          target="_blank"
          rel="noreferrer"
        >
          Holly Wigmore
        </a>
        and is open-sourced on
        <a
          href="https://github.com/Holly-Wigmore/React-Dictionary-Project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
