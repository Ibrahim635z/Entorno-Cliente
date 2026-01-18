import React from 'react'

export default function Login(props) {

    const user= {
        username: "hunaida",
        email: "hunaida@email.com"
    }

    const handleClick = () => {
        props.handleLogin(user);
    }
  return (
    <section>
        <h2>Login Section</h2>
        <button onClick={handleClick}>Login</button>
    </section>
  )
}
