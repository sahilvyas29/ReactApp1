import React from 'react';
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div><nav>Get Ready to Complete Your Daily Goals</nav>
    
    <div className='header'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/user/tempId">User</Link>
    </div>

    </div>
  )
}

export default Header;