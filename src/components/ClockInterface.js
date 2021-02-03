import React, { useContext } from 'react'
import EverythingContext from '../contexts/EverythingContext'

export default () => {
  const {
    paused
  } = useContext(EverythingContext)

  return (
    <div style={{ display: "flex", width: "30%", justifyContent: "space-evenly" }}>
      <div>
        {!paused ? "Play" : "Pause"}
      </div>

      <div>
        restart
      </div>
    </div>
  )
}