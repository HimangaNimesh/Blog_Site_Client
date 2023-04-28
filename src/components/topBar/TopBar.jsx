import React from 'react'
import './topBar.css'
import { Link } from 'react-router-dom';

export default function TopBar() {
  const user = true;
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
            <li className='topListItem'>
              <Link className='link' to='/'>HOME</Link>
            </li>
            <li className='topListItem'>
            <Link className='link' to='/'>ABOUT</Link>
            </li>
            <li className='topListItem'>
            <Link className='link' to='/'>CONTACT</Link>
            </li>
            <li className='topListItem'>
            <Link className='link' to='/write'>WRITE</Link>
            </li>
            <li className='topListItem'>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {
          user ? (
            <Link to={'/settings'}>
              <img className='topImg' src="https://media.licdn.com/dms/image/D5603AQFizZ5IejkklQ/profile-displayphoto-shrink_800_800/0/1675497382824?e=1687996800&v=beta&t=41UViiNfa2wk85E_DWGjq_I2iLX05aDDljxz2cItxrM" alt="" />
            </Link>
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to='/login'>LOGIN</Link>
              </li>
              <li className='topListItem'>
                <Link className='link' to='/register'>REGISTER</Link>
              </li>
            </ul>
          )

        }
          
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
