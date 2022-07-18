import React from 'react'

function ChangeItUp() {
  function handleChange(event) {
    console.log(`${event.target.name}:${event.target.value}`)
  }
  return (
    <div>
      <input type="text" name="search" onChange={handleChange} placeholder="Enter search term..." />
      <select name='filter' onChange={handleChange}>
        <option value="all">select a filetr..</option>
        <option value="completed">completed</option>
        <option value="incomplete">incomplete</option>
      </select>
    </div>
  )
}

export default ChangeItUp