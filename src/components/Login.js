import React from 'react'

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("I submit");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Enter username" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login