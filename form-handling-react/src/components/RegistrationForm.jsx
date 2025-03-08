import React, { useState } from 'react'


const RegistrationForm = () => {
  const [username,setUsername]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [error,setError]= useState("")

  const handleSubmit =(e)=>{
        e.preventDefault()
        console.log("submit", {username,email,password})
        if (!username.trim() && !email.trim() && !password.trim()) {
            return setError("Try again")
        }
        setError("")
        setUsername("")
        setEmail("")
        setPassword("")
        

  }

    return (
        

            <form onSubmit={handleSubmit} >
                <label htmlFor="username">Username</label>
                <input type="text" name='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                

                <label htmlFor="email">email</label>
                <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                

                <label htmlFor="password">Password</label>
                <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                
                {error && <div style={{color:"red"}}>{error}</div>}

                <button type='submit'>sign in</button>
            </form>

        
    )
}

export default RegistrationForm
