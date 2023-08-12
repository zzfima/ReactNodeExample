import React, { useEffect, useState } from 'react'
import './App.css';

function MainApp() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    readAdds()
  }, [])

  const readAdds = (() => fetch("/ads").then(
    response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  ))

  const mainPage =
    <html>
      <head>
        <title>Advertisements</title>
      </head>
      <body>
        <h2 className='blueHeader'>Advertisements areas</h2>
        <div>
          {(typeof backendData.adsArea === 'undefined') ? (
            <p>loading..</p>
          ) : (
            backendData.adsArea.map((ad, i) => (
              <p className='greenList'>{i} : {ad}</p>
            ))
          )}
          <button type="button" className='orangeButton' onClick={() => setBackendData({ "adsArea": ["Linkedin"] })}>secret ad</button>
          <button type="button" onClick={() => readAdds()}>Restore</button>
        </div>
      </body>
    </html>
  return (mainPage)
}

export default MainApp