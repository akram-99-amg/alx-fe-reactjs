import React, { useState } from 'react'


const RegistrationForm = () => {
  const [username,setUsername]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [error,setError]= useState("")

  const handleSubmit =(e)=>{
        e.preventDefault()
        
        console.log("submit", {username,email,password})
        if(!email){setError("Email is required")}
        if(!password){
            setError("try again")
            }
        setError("")
        setUsername("")
        setEmail("")
        setPassword("")
        

  }

    return (
        

            <form onSubmit={handleSubmit} >
                <label htmlFor="username">Username</label>
                <input type="text" name='username' required value={username} onChange={(e)=>setUsername(e.target.value)} />
                

                <label htmlFor="email">email</label>
                <input type="email" name='email' required value={email} onChange={(e)=>setEmail(e.target.value)} />
                

                <label htmlFor="password">Password</label>
                <input type="password" name='password' required value={password} onChange={(e)=>setPassword(e.target.value)} />
                
                {error && <div style={{color:"red"}}>{error}</div>}

                <button type='submit'>sign in</button>
            </form>

        
    )
}

export default RegistrationForm
