import React, { useContext } from 'react'
import EverythingContext from '../contexts/EverythingContext'

export default () => {
  const {
    onBreak,
    minutes,
    seconds
  } = useContext(EverythingContext);

  return (
    <div style={{
      height: "30vh",
      background: "#f8f8f8",
      width: "30%",
      borderRadius: "20px",
      margin: "20px 0",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0px 0px 7px 3px rgba(0, 0, 0, 0.2)",
      alignItems: "center",
      justifyContent: "space-evenly"
    }}>
      <div>
        {
          onBreak ? "Break" : "Session"
        }
      </div>

     <div style={{
       display: "flex"
     }}>
      <div>{minutes}</div>
      <div>:</div>
      <div>{seconds < 10 ? "0" + seconds : seconds}</div>
     </div>
    </div>
  )
}