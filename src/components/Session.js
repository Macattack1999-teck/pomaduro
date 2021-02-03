import React, { useContext } from 'react'
import EverythingContext from '../contexts/EverythingContext'

export default () => {
  const {
    sessionLength,
    setSessionLength
  } = useContext(EverythingContext);

  const handleUpdatingSessionLength = (btn) => {
    if (btn === '-') {
      if (sessionLength > 1) {
        setSessionLength(sessionLength - 1)
      }
    } else {
      if (sessionLength < 60) {
        setSessionLength(sessionLength + 1)
      }
    }
  }

  return (
    <div>
      <div>
        Session Length (mins)
      </div>

      <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
      }}>
        <div onClick={() => handleUpdatingSessionLength('-')}>
          -
        </div>

        <div>
          {sessionLength}
        </div>

        <div onClick={() => handleUpdatingSessionLength('+')}>
          +
        </div>
      </div>
    </div>
  )
}