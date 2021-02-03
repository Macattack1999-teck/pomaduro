import React, { useState } from 'react'
import EverythingContext from '../contexts/EverythingContext'

export default (props) => {
  const [onBreak, setOnBreak] = useState(false);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [paused, setPaused] = useState(true);

  const state = {
    onBreak,
    setOnBreak,
    sessionLength,
    setSessionLength,
    breakLength,
    setBreakLength
  }

  return (
    <EverythingContext.Provider value={state}>
      {props.children}
    </EverythingContext.Provider>
  )
}