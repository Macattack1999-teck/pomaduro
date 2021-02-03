import React from "react";
import Clock from "./Clock";
import ClockInterface from "./ClockInterface";
import SessionContainer from "./SessionContainer";

export default () => {
  return (
    <div style={{
      width: "100%"
    }}>
      <SessionContainer />

      <Clock />

      <ClockInterface />
    </div>
  )
}