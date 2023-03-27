import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    //un componente deve ritornare un solo elemento alla volta

    //conceto di ract fragment mettendo i maggiori minori
    //puo anche avere la forma allungata React.fragment
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <label htmlFor="test"></label>
          <input id="test" type="text" />
          <MyComponent />
        </header>
        <div className="conteiner"></div>
      </div>
    </>
  );
}

export default App;
