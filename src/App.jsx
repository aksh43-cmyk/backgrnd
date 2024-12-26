import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, height: "100vh" }}>
      <div className="content">
        <h1>COME ON GUYS PICK UR FAV COLOURS!!!</h1>
        <div className="button-container">
          <button onClick={() => handleColorChange("red")} style={{ backgroundColor: "red" }}>
            Red
          </button>
          <button onClick={() => handleColorChange("blue")} style={{ backgroundColor: "blue" }}>
            Blue
          </button>
          <button onClick={() => handleColorChange("green")} style={{ backgroundColor: "green" }}>
            Green
          </button>
          <button onClick={() => handleColorChange("yellow")} style={{ backgroundColor: "yellow" }}>
            Yellow
          </button>
          <button onClick={() => handleColorChange("pink")} style={{ backgroundColor: "pink" }}>
            Pink
          </button>
          <button onClick={() => handleColorChange("purple")} style={{ backgroundColor: "purple" }}>
            Purple
          </button>
          <button onClick={() => handleColorChange("orange")} style={{ backgroundColor: "orange" }}>
            Orange
          </button>
          <button onClick={() => handleColorChange("cyan")} style={{ backgroundColor: "cyan" }}>
            Cyan
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
