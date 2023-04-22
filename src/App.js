import "./App.css"
import React, {useState} from "react"
import FetchApp from "./Components/FetchApp"
import StarsCanvas from "./Components/Canvas/Stars"
import SearchBar from "./Components/SearchBar";

function App() {

  const [searchParam, setSearchParam] = useState("");

  return (
    <div className="App">
      {/* <StarsCanvas /> */}
      <SearchBar searchParam={searchParam} setSearchParam={setSearchParam} />
      <FetchApp searchParam={searchParam} />
    </div>
  )
}

export default App
