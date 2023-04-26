import "./App.css"
import React, {useState} from "react"
import FetchApp from "./Components/FetchApp"
import StarsCanvas from "./Components/Canvas/Stars"
import SearchBar from "./Components/SearchBar";

function App() {

  const [searchParam, setSearchParam] = useState("");
  const [type, setType] = useState("stories");

  return (
    <div className="App">
      <StarsCanvas />
      <SearchBar searchParam={searchParam} setSearchParam={setSearchParam} type={type} setType={setType}/>
      <FetchApp searchParam={searchParam} type={type}/>
    </div>
  )
}

export default App
