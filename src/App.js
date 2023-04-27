import "./App.css"
import React, {useState} from "react"
import FetchApp from "./Components/FetchApp"
import StarsCanvas from "./Components/Canvas/Stars"
import SearchBar from "./Components/SearchBar";

function App() {

  const [searchParam, setSearchParam] = useState("");
  const [type, setType] = useState("stories");
  const [age, setAge] = useState("")

  return (
    <div className="App">
      <StarsCanvas />
      <SearchBar
        searchParam={searchParam}
        setSearchParam={setSearchParam}
        type={type}
        setType={setType}
        age={age}
        setAge={setAge}
      />
      <FetchApp
        searchParam={searchParam}
        type={type}
        age={age}
      />
    </div>
  )
}
export default App
