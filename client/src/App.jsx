import './App.css'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { auth } from './firebase/auth'
import Homepage from './components/Homepage/Homepage'
import OnBoarding from './components/OnBoarding/OnBoarding'
// import {useNavigate} from 'react-router-dom'

function App() {
  const navigator = useNavigate()
  // if (!auth.currentUser) {
  //   console.log("User not logged in ");
  //   // return
  // }
  // if (auth.currentUser) {
  //   console.log("User logged in ");
  //   // return
  // }
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user){
        console.log("User logged in ");
        // navigator("/")  
      }
      else{
        console.log("User not logged in ");
        navigator("/login")
      }
    })
  }, [])
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
      <Route path="/" element={<Homepage />} />
      <Route path="/createUser" element={<OnBoarding />} />
    </Routes>
    </>
  )
}

export default App
