import Navbar from "./components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Login from "./screens/Login"
import SignUp from "./screens/SignUp"
import Landing from "./screens/Landing"
import Events from "./screens/Events"
import EventPage from "./screens/EventPage"
import HostEvent from "./screens/HostEvent"
function App() {


  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Landing/>}/>  
    <Route path='/add-event' element={<HostEvent/>}/>  
    <Route path='/events' element={<Events/>}/>  
    <Route path='/login' element={<Login/>}/>  
    <Route path='/sign-up' element={<SignUp/>}/>  
    <Route path='/sign-up' element={<SignUp/>}/>  
    <Route path='/event-page/:id' element={<EventPage/>}/>  
  </Routes></>
  )
}


export default App
