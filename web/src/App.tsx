import reactLogo from "./assets/shriram.webp";
import ItemManager from "./ItemManager";
import "./App.css";
// src/api.js

function App() {

  return (
    <>
      <div className="header">
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Shriram Laundry</h1>
      </div>
      <ItemManager />
    </>
  );
}

export default App;
