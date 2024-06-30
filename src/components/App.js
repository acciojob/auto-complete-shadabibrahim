
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [search, setSearch] = useState("")
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Search item</h1>
      <input type="text" onChange={handleChange} />
      <ul>
        {fruits.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
          .map((item, index) => {
            return <li key={index + 1}>{item}</li>
          })}
      </ul>

    </div>
  )
}

export default App
