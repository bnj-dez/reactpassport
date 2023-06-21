import { useEffect, useState } from "react";

export default function LoginForm() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")


  function submitLogin(e) {
    e.preventDefault()

    
    fetch('http://localhost:3000/login/password',
    {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username,password})
    })
    .then((res) => {
      console.log(res);
    })
  }


  return (
    <>
      <form action="#" method="post">
        <section>
          <label htmlFor="username">Username</label>
          <input
          onChange={(e)=>setUsername(e.target.value)}
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            autoFocus
          ></input>
        </section>
        <section>
          <label htmlFor="current-password">Password</label>
          <input
           onChange={(e)=>setPassword(e.target.value)}
            id="current-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          ></input>
        </section>
        <button onClick={submitLogin} type="submit">Sign in</button>
      </form>
    </>
  );
}
