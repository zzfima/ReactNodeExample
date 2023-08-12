import React, { useEffect, useState } from 'react'
import './App.css';

function MainApp() {
  const [getBackendData, setBackendData] = useState([{}])
  const [getNewAdvertisementPlace, setNewAdvertisementPlace] = useState({})

  useEffect(() => {
    readAdvertisementPlaces()
  }, [])

  const readAdvertisementPlaces = (() => fetch('/advertisementPlaces').then(
    response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  ))

  const submitNewAdvertisementPlace = (() => fetch('/advertisementPlaces', {
    method: 'POST',
    body: JSON.stringify(getNewAdvertisementPlace),
    headers: {
      'Content-Type': 'application/json'
    }
  }))

  const mainPage =
    <html>
      <head>
        <title>Advertisements</title>
      </head>
      <body>
        <h2 className='blueHeader'>Advertisements areas</h2>
        <div>
          {(typeof getBackendData.advertisementPlaces === 'undefined') ? (
            <p>loading..</p>
          ) : (
            getBackendData.advertisementPlaces.map((ad, i) => (
              <p className='greenList'>{i} : {ad}</p>
            ))
          )}
          <button type="button" className='orangeButton' onClick={() => setBackendData({ "advertisementPlaces": ["Linkedin"] })}>secret ad</button>
          <button type="button" onClick={() => readAdvertisementPlaces()}>Restore</button>
        </div>
        <div>
          <form onSubmit={submitNewAdvertisementPlace}>
            <input type="text" onChange={e => setNewAdvertisementPlace({ ...getNewAdvertisementPlace, advertisementPlace: e.target.value })} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </body>
    </html>
  return (mainPage)
}

export default MainApp