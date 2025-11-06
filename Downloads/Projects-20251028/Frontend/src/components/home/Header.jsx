import React from 'react'
import "../../css/Home.css"
import Search from './Search'
const Header = () => {
  return (
    <>
 <nav className='header row sticky-top'>
    <img src='/assets/logo.png' alt='logo' className='logo'/>
    
    <div className='search_filter'>
      <Search/>
    </div>

        <span className='material-symbols-outlined web_logo'>
           account_circle
        </span>
      
      <div className='dropdown'>
        <span 
        className='material-symbols-outlined dropdown-toggle' 
        role='button' 
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        >
            <img src ='/assets/avatar.png' className='user-img rounded-circle w-25 h-25' alt='icon' />
        </span>

        <ul className='dropdown-menu dropdown-menu-end' aria-labelledby='dropdownMenuLink'>
        <li><a className='dropdown-item' href='#'>My account</a></li>
        <li><a className='dropdown-item' href='#'>Settings</a></li>
        <li><a className='dropdown-item' href='#'>Logout</a></li>

        </ul>
      </div>
    </nav>
 </>
  )
}

export default Header