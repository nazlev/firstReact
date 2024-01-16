import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/context';
import MyButton from '../button/MyButton';

const NavBar = () => {
  const { setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }
  return (
    <div className='navbar'>
        <MyButton className="navbar__exit" onClick={logout} isActive={true}>Exit</MyButton>
        <div className='navbar__links'>
            <Link className='navbar__link' to='/posts'> Posts </Link>
            <Link className='navbar__link' to='/about'> About </Link>
        </div>
    </div>
  )
}

export default NavBar