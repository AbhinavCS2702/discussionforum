import React from "react";
import { Link } from "react-router-dom";
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import SearchIcon from '@mui/icons-material/Search';
import Logo from './images/VC.jpg';
import './Header.css';
function Header() {
    const [{user}]=useStateValue();
    const handleAuthentication=()=>{
        if(user)
        {
            auth.signOut();
        }
    }
  return (
      <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src={Logo}
        />
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>
              Hello {user ? user.email : `Guest`}
            </span>
            <span className='header__optionLineTwo'>
              {user ? 'Sing out' : 'Sign In'}
            </span>
          </div>
        </Link>
        </div>
    </div>
  );
}

export default Header;
