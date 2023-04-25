import React from 'react'
import './topBar.css'

export default function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className='topList'>
            <li className='topListItem'>HOME</li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>CONTACT</li>
            <li className='topListItem'>WRITE</li>
            <li className='topListItem'>LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
          <img className='topImg' src="https://media.licdn.com/dms/image/D5603AQFizZ5IejkklQ/profile-displayphoto-shrink_800_800/0/1675497382824?e=1687996800&v=beta&t=41UViiNfa2wk85E_DWGjq_I2iLX05aDDljxz2cItxrM" alt="" />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
