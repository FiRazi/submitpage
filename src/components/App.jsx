import React, { useState } from "react";

function App() {
  // set h1 state to hello
  const [headingText, setHeading] = useState("Hello");
  function headingSet() {
    setHeading("Submitted");
  }
  const [isMouseOver, setMouseover] = useState(false);
  function clickMouseover() {
    setMouseover(true);
  }
  function handleMouseOut() {
    setMouseover(false);
  }

  return (
    <div class="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="Whats your Name" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={headingSet}
        onMouseOver={clickMouseover}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
