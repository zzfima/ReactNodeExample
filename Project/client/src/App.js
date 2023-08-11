import React, { useEffect, useState } from 'react'

function App() {
  const [backendData, serBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        serBackendData(data)
      }
    )
  }, [])

  return (
    <div></div>
  )
}

export default App