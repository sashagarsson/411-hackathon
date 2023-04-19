import "./App.css"
import React from "react"
import FetchApp from "./Components/FetchApp"
import StarsCanvas from "./Components/Canvas/Stars"

function App() {
  return (
    <div className="App">
      <StarsCanvas />
      <FetchApp />
    </div>
  )
}

export default App
