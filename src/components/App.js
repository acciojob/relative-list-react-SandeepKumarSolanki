import React from 'react'
let arr = [
  "subrato", "krishna", "sandeep"
]
const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol>
        {arr.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ol>
    </div>
  )
}

export default App
