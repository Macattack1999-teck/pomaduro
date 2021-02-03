import React from 'react'

export default () => {
  return (
    <div style={{
      height: "40vh",
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
        session or break state
      </div>

     <div>
       timer
     </div>
    </div>
  )
}