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
          Up
        </div>

        <div>
          {sessionLength}
        </div>

        <div>
          Down
        </div>
      </div>
    </div>
  )
}