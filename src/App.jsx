import Navbar from "./components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Login from "./screens/Login"
import SignUp from "./screens/SignUp"
function App() {


  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/login' element={<Login/>}/>  
    <Route path='/sign-up' element={<SignUp/>}/>  
  </Routes></>
  )
}
import { Form } from "react-router-dom"

export default App
