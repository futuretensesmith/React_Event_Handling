import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
    //console.log("clicked");
  }

  function overColor() {
    setMouseOver(true);
  }

  function outColor() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={overColor}
        onMouseOut={outColor}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

// style="background-color:black;"
//onMouseOver={{ backgroundColor: "black" }}
