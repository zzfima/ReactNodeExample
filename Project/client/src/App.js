import React, { useEffect, useState } from 'react'

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    readUsers()
  }, [])

  const readUsers = (() => fetch("/ads").then(
    response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  ))

  return (
    <div>
      {(typeof backendData.adsArea === 'undefined') ? (
        <p>loading..</p>
      ) : (
        backendData.adsArea.map((ad, i) => (
          <p key={i}>{ad}</p>
        ))
      )}
      <button type="button" onClick={() => setBackendData({ "adsArea": ["Linkedin"] })}>secret ad</button>
      <button type="button" onClick={() => readUsers()}>RESTORE</button>
    </div>
  )
}

export default App