import React, { useContext } from 'react'
import EverythingContext from '../contexts/EverythingContext'

export default () => {
  const {
    sessionLength
  } = useContext(EverythingContext);

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
        <div>
          -
        </div>

        <div>
          {sessionLength}
        </div>

        <div>
          +
        </div>
      </div>
    </div>
  )
}