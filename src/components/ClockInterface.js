import React, { useContext } from 'react'
import EverythingContext from '../contexts/EverythingContext'

export default () => {
  const {
    paused,
    setPaused
  } = useContext(EverythingContext)

  const handleChangingState = () => {
    setPaused(!paused)
  }

  return (
    <div style={{ display: "flex", width: "30%", justifyContent: "space-evenly" }}>
      <div onClick={handleChangingState}>
        {paused ? "Play" : "Pause"}
      </div>

      <div>
        restart
      </div>
    </div>
  )
}