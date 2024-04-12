import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex '>
        <h1>App name</h1>
        <div><Link to={'/sign-up'}>Sign Up</Link><Link to={'/login'}>Login</Link></div>
    </div>
  )
}

export default Navbar