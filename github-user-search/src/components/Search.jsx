import {useState}from 'react'
import { fetchUserDatat } from '../services/githubService'

const Search = () => {
  const [query,setQuery]=useState("");
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(null);
  const [error,setError]=useState(null);

  const handleSubmit =async (e)=>{
    e.preventDefault()
    setLoading(true)
    setError(null)
    setUser(null)

    try{
      const userData =await fetchUserDatat(query)
      setUser(userData)
    }catch(err){
      setError(err.message)
    }
    setLoading(false)
  }

 

  return (
    <div className="flex flex-col items-center p-6">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub User"
          className="border p-2 rounded-md shadow-sm"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded-md">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Looks like we can't find the user.</p>}
      {user && (
        <div className="border p-4 rounded-md shadow-md flex flex-col items-center">
          <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
          <h2 className="mt-2 text-lg font-semibold">{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View Profile
          </a>
        </div>
      )}
    </div>
  )
}

export default Search
