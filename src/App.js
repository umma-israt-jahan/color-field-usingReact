import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState(null);
  const selected = {
    backgroundColor: color,
  };
  const selectedText = {
    color: color === null ? "white" : color,
  };
  return (
    <div className="App">
      <div className="banner-Container">
        <div>
          <h1 style={{ ...selectedText }}>Search Result</h1>
          <h3 style={{ ...selectedText }}>
            Entered color : <strong>{color}</strong>
          </h3>
          <input
            type="text"
            className="inputField"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div>
          <div className="wrapper">
            <textarea
              name=""
              id=""
              cols="50"
              rows="10"
              className="inputField"
              style={{ ...selected }}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
