import React, { useState } from 'react'

const RegistrationForm = () => {

    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  return (
    <form>
        <label htmlFor="username">Username</label>
        <input type="text" name='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>

        <label htmlFor="email">email</label>
        <input type="email" name='email'value={email} onChange={(e)=>setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      
        <button type='submit'>sign in</button>       
    </form>
  )
}

export default RegistrationForm
