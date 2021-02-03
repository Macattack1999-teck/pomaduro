import React, { useContext } from 'react'
import EverythingContext from '../contexts/EverythingContext'

export default () => {
  const {
    breakLength
  } = useContext(EverythingContext);

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
        <div>
          Up
        </div>

        <div>
          {breakLength}
        </div>

        <div>
          Down
        </div>
      </div>
    </div>
  )
}