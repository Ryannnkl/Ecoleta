import React from "react";

import "./App.css";

function App() {
  const names = ["Lulu", "Icaro", "Gui"];

  return (
    <div className="App">
      <h1>Ola {names.join("")}</h1>
    </div>
  );
}

export default App;
