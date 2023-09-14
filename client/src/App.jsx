import { auth } from './firebase/auth'
import './App.css'
import Signup from './components/Signup/Signup'
// import {useNavigate} from 'react-router-dom'

function App() {
  // const navigator = useNavigate()
  // if (!auth.currentUser) {
  //   console.log("User not logged in ");
  //   // return
  // }
  // if (auth.currentUser) {
  //   console.log("User logged in ");
  //   // return
  // }
  return (
    <>
      <Signup />
    </>
  )
}

export default App
