import React from 'react'
import './nav.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from './AuthContext';

const Nav = () => {
  const c = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignIn = async (e) => {
      e.preventDefault();
      try {
          await c.googleSignIn();
          navigate('/')
      } catch (err) {
          console.error(err);
          alert('Could not sign in');
      }
  }
  if(c.User){
    console.log(c.User.photoURL);
  }else{
    console.log("could not get photo")
  }

  return (
    <div className="bd">
      <div className="topnav" id="myTopnav">
        <NavLink activeClassName='active_class' className='NavLink' to='/'  >CPCoders</NavLink>
        <NavLink activeClassName='active_class' className='NavLink' to='/contact'>Contact</NavLink>
        <NavLink activeClassName='active_class' className='NavLink' to='/chat'>Chat</NavLink>
        {/* <a href="#about">About</a> */}
        <div className="social">
        {!c.User?<div className='btn btn-avatar' onClick={handleGoogleSignIn}>Log In</div>:<img src={c.User.photoURL} className='avatar'/>}
        </div>
      </div>
    </div>
  )
}

export default Nav
