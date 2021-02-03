import React from 'react'

export default () => {
  return (
    <div 
      style={{
        height: "100%",
        minHeight: "100vh",
        width: "100%",
        background: "#185687",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
      }}
    >
      <div>
        Pomaduro
      </div>

      <div>
        some component
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
      }}>
        Designed and Coded by:

        <span style={{
          fontSize: "14px",
          paddingTop: "5px"
        }}>
          Michael Cortez
        </span>
      </div>
    </div>
  )
}