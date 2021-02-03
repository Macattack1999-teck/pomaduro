import React, { useContext } from 'react'
import EverythingContext from '../contexts/EverythingContext'

export default () => {
  const {
    breakLength,
    setBreakLength
  } = useContext(EverythingContext);

  const handleUpdatingbreakLength = (btn) => {
    if (btn === '-') {
      if (breakLength > 1) {
        setBreakLength(breakLength - 1)
      }
    } else {
      if (breakLength < 60) {
        setBreakLength(breakLength + 1)
      }
    }
  }

  return (
    <div>
      <div>
        break Length (mins)
      </div>

      <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
      }}>
        <div onClick={() => handleUpdatingbreakLength('-')}>
          -
        </div>

        <div>
          {breakLength}
        </div>

        <div onClick={() => handleUpdatingbreakLength('+')}>
          +
        </div>
      </div>
    </div>
  )
}