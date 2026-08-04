import Nav from "./components/Nav"
import SignUpForm from "./pages/SignUpForm"
import SignInForm from "./pages/SignInForm"
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import './App.css'
import { Routes, Route } from "react-router"
import { useState } from "react"

const App = () => {

  const getUserFromToken = ()=>{
    const token = localStorage.getItem('token')
    if (!token) return null
    return JSON.parse(atob(token.split('.')[1])).payload
  }
  const [user, setUser] = useState(getUserFromToken())

  return (
    <div>
      <Nav user={user} setUser={setUser}/>
      <main className="app-main">
      <Routes>
        <Route path='/sign-up' element={<SignUpForm setUser={setUser} />} />
        <Route path="/sign-in" element={<SignInForm setUser={setUser} />}/>
        <Route path='/' element={user ? <Dashboard user={user} /> : <Landing />} />
      </Routes>
      </main>
    </div>
  )
}

export default App

