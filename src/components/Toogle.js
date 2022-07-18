import React, { useState } from 'react'

export default function Toogle() {
  const [isOn, setIsOn] = useState(false);
  const color = isOn? "green":"red"
  function handleClick() {
    setIsOn((isOn) =>
      !isOn);
  }
  return (
    <div>
      <button style={{background:color}} onClick={handleClick}>{ isOn? "ON":"OFF"}</button>
    </div>
  )
}
