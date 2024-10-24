import React, { useState } from 'react'

const RegisterPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    async function register(e) {
        e.preventDefault();
        const respone = await fetch("http://localhost:4000/register", {
          method: "POST",
          body: JSON.stringify({ username, password }),
          headers: { "Content-Type": "application/json" },
        });
        if (respone.status === 200) {
            alert("success!!!");
        } else {
            alert("failed!!!");
        }
    }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
      />
      <button>Register</button>
    </form>
  );
}

export default RegisterPage