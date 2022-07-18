import React from "react";
function Clickable({ onClick }) {
  return <button onClick={onClick}>Tickle Me!</button>
}
  function Eventss() {
  function handleClick() {
    console.log("Click Me");
  }
  
  return <Clickable onClick={handleClick}/>
}
export default Eventss