import React from 'react'
import Break from './Break'
import Session from './Session'

export default () => {
  return (
    <div style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly"
    }}>
      <Break />
      <Session />
    </div>
  )
}