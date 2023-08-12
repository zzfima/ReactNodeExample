import React, { useEffect, useState } from 'react'

function MainApp() {
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
          <p>{i} : {ad}</p>
        ))
      )}
      <button type="button" onClick={() => setBackendData({ "adsArea": ["Linkedin"] })}>secret ad</button>
      <button type="button" onClick={() => readUsers()}>Restore</button>
    </div>
  )
}

export default MainApp