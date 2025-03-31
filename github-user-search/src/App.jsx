import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import SearchGitHub from "./components/SearchGitHub"

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchGitHub />}/>

    </Routes>
      
    </BrowserRouter>
  )
}

export default App
