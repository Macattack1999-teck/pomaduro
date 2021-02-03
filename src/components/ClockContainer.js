import React from "react";
import Clock from "./Clock";
import ClockInterface from "./ClockInterface";
import SessionContainer from "./SessionContainer";

export default () => {
  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "60vh",
      justifyContent: "space-evenly"
    }}>
      <SessionContainer />

      <Clock />

      <ClockInterface />
    </div>
  )
}