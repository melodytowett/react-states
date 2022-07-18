import React from 'react'
import ColorItem from './ColorItem';
function Color() {
  const colors = [
    "firebrick",
    "ribeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const colorElements = colors.map((color) => {
    return <ColorItem key={color} color={color}/>
  });
  return (
    <div>
      {colorElements}
      <div className='container'>
        <h1>Hello, I'm in a container!</h1>
        <p>I'm adescription!</p>
      </div>
      <div className='container'>
        <strong>Image description</strong>
      </div>
      <div className='container'>
        <h4>people</h4>
        <ul>
          <li>Evans "wangtron" wang</li>
          <li>Andrew "Chrome Boi" cohn</li>
          <li>Tashawn "Thrusdays" Williams</li>
          <li>Alex "Friggin'" Griffith</li>
        </ul>
      </div>
  </div>
  )

}

export default Color